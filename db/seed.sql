\c habit_flow

INSERT INTO 
users (first_name, last_name, dob_day, dob_month, dob_year, gender, email, password)
VALUES
('John', 'Doe', 15, 3, 1990, 'Male', 'john.doe@example.com', 'PizzaLover99'),
('Jane', 'Smith', 5, 8, 1985, 'Female', 'jane.smith@example.com', 'CoffeeBreak88'),
('Alex', 'Johnson', 10, 11, 2000, 'Non-Binary', 'alex.johnson@example.com', 'MountainView9'),
('Chris', 'Williams', 20, 6, 1998, 'Other', 'chris.williams@example.com', 'Sunshine22'),
('Taylor', 'Brown', 12, 9, 1992, 'Female', 'taylor.brown@example.com', 'simplepassword'),
('Jordan', 'Miller', 8, 2, 1987, 'Male', 'jordan.miller@example.com', '12345678'),
('Sam', 'Davis', 25, 7, 1995, 'Non-Binary', 'sam.davis@example.com', 'Moonlight17'),
('Jamie', 'Martinez', 18, 4, 1993, 'Other', 'jamie.martinez@example.com', 'PurpleSky7'),
('Alexis', 'Johnson', 9, 10, 1988, 'Non-Binary', 'alexis.johnson@example.com', 'password123'),
('Riley', 'Anderson', 14, 1, 2001, 'Male', 'riley.anderson@example.com', 'SoccerFan16'),
('Jordan', 'White', 6, 12, 1994, 'Female', 'jordan.white@example.com', 'HappyDance123'),
('Avery', 'Lee', 21, 5, 1986, 'Non-Binary', 'avery.lee@example.com', 'StarryNight8'),
('Charlie', 'Taylor', 11, 3, 1997, 'Other', 'charlie.taylor@example.com', 'securepass'),
('Alex', 'Clark', 3, 7, 1989, 'Male', 'alex.clark@example.com', 'GuitarRock5'),
('Riley', 'Garcia', 17, 8, 2002, 'Female', 'riley.garcia@example.com', 'Chocolate7');

INSERT INTO
habits (name, difficulty, description)
VALUES
('Wake Up Early', 'Easy', 'Start your day by waking up at the same time each morning.'),
('Hydrate', 'Easy', 'Drink a glass of water as soon as you wake up and continue throughout the day.'),
('Balanced Meals', 'Moderate', 'Eat balanced meals with a mix of protein, carbs, and vegetables.'),
('Regular Exercise', 'Moderate', 'Engage in 30 minutes of physical activity most days of the week.'),
('Brush Teeth Twice', 'Easy', 'Brush your teeth twice a day, once in the morning and once before bed.'),
('Floss Daily', 'Moderate', 'Floss your teeth daily to maintain good oral hygiene.'),
('Mindful Eating', 'Moderate', 'Eat mindfully, savoring each bite and paying attention to hunger cues.'),
('Screen-Free Time', 'Moderate', 'Have a designated period each day without screens (phones, computers).'),
('Meditation', 'Moderate', 'Practice meditation or deep breathing for 10 minutes daily to relax.'),
('Bedtime Routine', 'Easy', 'Create a calming bedtime routine to help you wind down and sleep better.'),
('Limit Caffeine', 'Moderate', 'Consume caffeine only in the morning to improve sleep quality.'),
('Regular Sleep Schedule', 'Moderate', 'Go to bed and wake up at the same time every day to regulate your sleep.'),
('Stay Organized', 'Moderate', 'Take a few minutes each day to organize your living or workspace.'),
('Practice Gratitude', 'Easy', 'Write down three things you are grateful for each night.'),
('Healthy Snacking', 'Easy', 'Opt for healthy snacks like fruits, nuts, or yogurt instead of junk food.');


INSERT INTO
users_habits (user_id, habit_id)
VALUES
(1, 1),
(1, 3),  
(2, 2),  
(2, 4),  
(3, 5),  
(3, 6),  
(4, 7),  
(4, 8),  
(5, 9),  
(5, 10), 
(6, 11), 
(6, 12), 
(7, 13), 
(7, 14), 
(9, 2),  
(9, 3),  
(10, 4), 
(10, 5), 
(11, 6), 
(11, 7), 
(12, 8), 
(12, 9), 
(13, 10),
(13, 11),
(15, 14),
(15, 15);


INSERT INTO
stats (user_id, habit_id, day, month, year, completion, progress)
VALUES
(1, 1, 5, 8, 2023, 3, 2),
(1, 2, 6, 8, 2023, 1, 1),
(2, 3, 7, 8, 2023, 2, 1),
(2, 4, 8, 8, 2023, 3, 2),
(3, 5, 9, 8, 2023, 3, 2),
(3, 6, 10, 8, 2023, 1, 1),
(4, 7, 11, 8, 2023, 1, 1),
(4, 8, 12, 8, 2023, 2, 1),
(5, 9, 13, 8, 2023, 3, 2),
(5, 10, 14, 8, 2023, 3, 2),
(6, 11, 15, 8, 2023, 2, 1),
(6, 12, 16, 8, 2023, 1, 1),
(7, 13, 17, 8, 2023, 3, 2),
(7, 14, 18, 8, 2023, 1, 1),
(8, 15, 19, 8, 2023, 3, 2),
(8, 1, 20, 8, 2023, 3, 2),
(9, 2, 21, 8, 2023, 1, 1),
(9, 3, 22, 8, 2023, 3, 2),
(10, 4, 23, 8, 2023, 3, 2),
(10, 5, 24, 8, 2023, 2, 1),
(11, 6, 25, 8, 2023, 3, 2),
(11, 7, 26, 8, 2023, 1, 1),
(12, 8, 27, 8, 2023, 3, 2),
(12, 9, 28, 8, 2023, 3, 2),
(13, 10, 29, 8, 2023, 2, 1),
(13, 11, 30, 8, 2023, 3, 2),
(14, 12, 31, 8, 2023, 2, 1),
(14, 13, 1, 9, 2023, 3, 2),
(15, 14, 2, 9, 2023, 3, 2),
(15, 15, 3, 9, 2023, 2, 1);