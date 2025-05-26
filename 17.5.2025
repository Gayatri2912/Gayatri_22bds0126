show databases;
CREATE DATABASE school;

USE school;

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    grade VARCHAR(10)
);

CREATE TABLE teachers (
    teacher_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    subject VARCHAR(50),
    phone VARCHAR(15)
);

CREATE TABLE classes (
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(50),
    room_number VARCHAR(10),
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)
);

INSERT INTO students (name, age, grade) VALUES
('Ananya Sharma', 14, '8A'),
('Rohan Verma', 15, '9B'),
('Priya Singh', 13, '7A'),
('Kunal Mehta', 14, '8B'),
('Isha Kapoor', 12, '6C'),
('Arjun Patel', 15, '9A'),
('Neha Gupta', 13, '7C'),
('Vikas Yadav', 14, '8C'),
('Sneha Rao', 12, '6A'),
('Aman Joshi', 13, '7B');

INSERT INTO teachers (name, subject, phone) VALUES
('Mrs. Meena Iyer', 'Mathematics', '9876543210'),
('Mr. Raj Malhotra', 'Science', '9823456789'),
('Ms. Anjali Desai', 'English', '9812345670'),
('Mr. Sameer Khan', 'Social Science', '9809876543'),
('Mrs. Ritu Sharma', 'Hindi', '9898989898'),
('Mr. Nitin Rao', 'Physics', '9797979797'),
('Ms. Kavita Joshi', 'Chemistry', '9887766554'),
('Mr. Arvind Patel', 'Biology', '9776655443'),
('Ms. Pooja Rani', 'Computer', '9665544332'),
('Mr. Sanjay Sinha', 'History', '9554433221');

INSERT INTO classes (class_name, room_number, teacher_id) VALUES
('8A', '101', 1),
('9B', '102', 2),
('7A', '103', 3),
('8B', '104', 4),
('6C', '105', 5),
('9A', '106', 6),
('7C', '107', 7),
('8C', '108', 8),
('6A', '109', 9),
('7B', '110', 10);

SELECT * FROM students;

ALTER TABLE students ADD email VARCHAR(100);

DESC students;

ALTER TABLE students DROP COLUMN email;

ALTER TABLE students ADD nationality VARCHAR(20) DEFAULT 'Indian';

UPDATE students 
SET name = 'Vikas Kumar' 
WHERE name = 'Vikas Yadav';

SELECT * FROM teachers;

ALTER TABLE teachers ADD email VARCHAR(100);

UPDATE teachers 
SET name = 'Dr. Raj Malhotra' 
WHERE name = 'Mr. Raj Malhotra';

ALTER TABLE teachers ADD experience INT DEFAULT 5;




