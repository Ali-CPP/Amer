using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace ConstructionSafetySurvey
{
    class Program
    {
        // ============================================================================
        // SURVEY CONFIGURATION - EASILY EDITABLE QUESTIONS
        // ============================================================================
        private static readonly string SurveyTitle = "Daily Safety and Security Survey";
        private static readonly List<SurveyQuestion> SurveyQuestions = new List<SurveyQuestion>
        {
            new SurveyQuestion
            {
                Question = "Have all workers completed their safety orientation for today?",
                Type = QuestionType.YesNo
            },
            new SurveyQuestion
            {
                Question = "Are all personal protective equipment (PPE) items in good condition and being worn properly?",
                Type = QuestionType.YesNo
            },
            new SurveyQuestion
            {
                Question = "Are all tools and equipment in safe working condition?",
                Type = QuestionType.YesNo
            },
            new SurveyQuestion
            {
                Question = "Are there any visible safety hazards on the construction site?",
                Type = QuestionType.YesNo
            },
            new SurveyQuestion
            {
                Question = "Describe any safety incidents or near-misses that occurred today:",
                Type = QuestionType.Text
            }
        };

        // ============================================================================
        // FILE CONFIGURATION
        // ============================================================================
        // Survey data will be saved to a text file in the same directory
        private static readonly string OutputDirectory = "SurveyReports";

        static async Task Main(string[] args)
        {
            Console.WriteLine("=== CONSTRUCTION SAFETY SURVEY ===");
            Console.WriteLine("This application will conduct a daily safety survey and create a Google Docs report.\n");

            try
            {
                // Conduct the survey
                var surveyResponses = ConductSurvey();

                // Save survey data to text file
                var fileName = await SaveSurveyToTextFile(surveyResponses);

                Console.WriteLine($"\n✅ Survey completed successfully!");
                Console.WriteLine($"📄 Report saved to: {fileName}");
                Console.WriteLine("\nPress any key to exit...");
                Console.ReadKey();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"\n❌ An error occurred: {ex.Message}");
                Console.WriteLine("Press any key to exit...");
                Console.ReadKey();
            }
        }

        // ============================================================================
        // SURVEY CONDUCTING METHODS
        // ============================================================================
        private static List<SurveyResponse> ConductSurvey()
        {
            var responses = new List<SurveyResponse>();
            var currentDate = DateTime.Now;

            Console.WriteLine($"Date: {currentDate:yyyy-MM-dd}");
            Console.WriteLine($"Time: {currentDate:HH:mm:ss}");
            Console.WriteLine($"Survey Title: {SurveyTitle}\n");

            Console.WriteLine("Please answer the following safety questions:\n");

            for (int i = 0; i < SurveyQuestions.Count; i++)
            {
                var question = SurveyQuestions[i];
                Console.WriteLine($"Question {i + 1}: {question.Question}");
                
                string answer = "";
                bool validAnswer = false;

                while (!validAnswer)
                {
                    if (question.Type == QuestionType.YesNo)
                    {
                        Console.Write("Answer (Y/N): ");
                        var input = Console.ReadLine()?.Trim().ToUpper() ?? "";
                        
                        if (input == "Y" || input == "YES")
                        {
                            answer = "Yes";
                            validAnswer = true;
                        }
                        else if (input == "N" || input == "NO")
                        {
                            answer = "No";
                            validAnswer = true;
                        }
                        else
                        {
                            Console.WriteLine("Please enter Y for Yes or N for No.");
                        }
                    }
                    else if (question.Type == QuestionType.Text)
                    {
                        Console.Write("Answer: ");
                        answer = Console.ReadLine()?.Trim() ?? "";
                        
                        if (!string.IsNullOrEmpty(answer))
                        {
                            validAnswer = true;
                        }
                        else
                        {
                            Console.WriteLine("Please provide an answer.");
                        }
                    }
                }

                responses.Add(new SurveyResponse
                {
                    Question = question.Question,
                    Answer = answer,
                    QuestionNumber = i + 1
                });

                Console.WriteLine();
            }

            return responses;
        }

        // ============================================================================
        // TEXT FILE SAVING
        // ============================================================================
        private static async Task<string> SaveSurveyToTextFile(List<SurveyResponse> responses)
        {
            try
            {
                Console.WriteLine("📄 Creating survey report...");

                // Create output directory if it doesn't exist
                if (!Directory.Exists(OutputDirectory))
                {
                    Directory.CreateDirectory(OutputDirectory);
                }

                // Generate filename with timestamp
                var fileName = $"{SurveyTitle.Replace(" ", "_")}_{DateTime.Now:yyyy-MM-dd_HH-mm-ss}.txt";
                var filePath = Path.Combine(OutputDirectory, fileName);

                // Create the report content
                var reportContent = new List<string>
                {
                    "=".PadRight(60, '='),
                    $"           {SurveyTitle}",
                    "=".PadRight(60, '='),
                    "",
                    $"Survey Date: {DateTime.Now:yyyy-MM-dd}",
                    $"Survey Time: {DateTime.Now:HH:mm:ss}",
                    "",
                    "".PadRight(60, '-'),
                    ""
                };

                // Add questions and answers
                foreach (var response in responses)
                {
                    reportContent.Add($"Q{response.QuestionNumber}. {response.Question}");
                    reportContent.Add($"A: {response.Answer}");
                    reportContent.Add("");
                }

                // Add footer
                reportContent.Add("".PadRight(60, '-'));
                reportContent.Add($"Report generated on: {DateTime.Now:yyyy-MM-dd HH:mm:ss}");
                reportContent.Add("=".PadRight(60, '='));

                // Write to file
                await File.WriteAllLinesAsync(filePath, reportContent);

                Console.WriteLine("✅ Survey report created successfully!");
                return filePath;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Failed to create report: {ex.Message}");
                throw;
            }
        }
    }

    // ============================================================================
    // DATA MODELS
    // ============================================================================
    public class SurveyQuestion
    {
        public string Question { get; set; } = string.Empty;
        public QuestionType Type { get; set; }
    }

    public class SurveyResponse
    {
        public string Question { get; set; } = string.Empty;
        public string Answer { get; set; } = string.Empty;
        public int QuestionNumber { get; set; }
    }

    public enum QuestionType
    {
        YesNo,
        Text
    }
}
