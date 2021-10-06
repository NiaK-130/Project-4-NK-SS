puts "Seeding teachers..."
teacher1 = Teacher.create(name: 'Ms. Caitlin', grade_level: '9th Grade', username: 'mscaitlin', password: '9thgrade')
teacher2 = Teacher.create(name: 'Ms. Lizzie', grade_level: '10th Grade' , username: 'mslizzie', password: '10thgrade')
teacher3 = Teacher.create(name: 'Mr. Tom', grade_level: '12th Grade', username: 'mrtom', password: '12thgrade')



puts "Seeding students..."
student1 = Student.create(name: 'Morgan Smith', image:"./Images/Morgan_Smith-gr-9.png", email: 'msmith@westvalley.org', home_address: '1256 Jennings Street San Jose, CA 93174',  gpa: 3.8, reading_level: 'Above grade level', writing_level: 'Above grade level', math_level: 'Above grade level', teacher_id: teacher1.id)

student2 = Student.create(name: 'Josh Johnson', email: 'jjohnson@westvalley.org', home_address: '159 Amherst Drive San Jose, CA 93173',  gpa: 3.0, reading_level: 'At grade level', writing_level: 'Below grade level', math_level: 'Above grade level', teacher_id: teacher1.id)

student3 = Student.create(name: 'Julia Rogers', email: 'jrogers@westvalley.org', home_address: '532 Pier Street San Jose, CA 93174',  gpa: 2.5, reading_level: 'Below grade level', writing_level: 'At grade level', math_level: 'At grade level', teacher_id: teacher1.id)

student4 = Student.create(name: 'Aaron Walter', email: 'awalter@westvalley.org', home_address: '8247 Alton Drive San Jose, CA 93172',  gpa: 4.0, reading_level: 'Above grade level', writing_level: 'Above grade level', math_level: 'Above grade level', teacher_id: teacher1.id)

student5 = Student.create(name: 'Devonte Adams', email: 'dadams@westvalley.org', home_address: '9109 Galvin Avenue San Jose, CA 93173',  gpa: 3.2, reading_level: 'Above grade level', writing_level: 'Above grade level', math_level: 'At grade level', teacher_id: teacher1.id)

student6 = Student.create(name: 'Matthew Kelly', email: 'mkelly@westvalley.org', home_address: '730 Pegshop Avenue San Jose, CA 93184',  gpa: 2.3, reading_level: 'Below grade level', writing_level: 'Below grade level', math_level: 'At grade level', teacher_id: teacher2.id)

student7 = Student.create(name: 'Nabil Hassan', email: 'nhassan@westvalley.org', home_address: '861 Mayfield Lane San Jose, CA 93174',  gpa: 3.7, reading_level: 'Above grade level', writing_level: 'Above grade level', math_level: 'Above grade level', teacher_id: teacher2.id)

student8 = Student.create(name: 'Izaias Perez', email: 'iperez@westvalley.org', home_address: '9807 Galvin San Jose, CA 93173',  gpa: 3.3, reading_level: 'Above grade level', writing_level: 'At grade level', math_level: 'Above grade level', teacher_id: teacher2.id)

student9 = Student.create(name: 'Cadence Marion ', email: 'cmarion@westvalley.org', home_address: '602 Lafayette Street San Jose, CA 93174',  gpa: 2.8, reading_level: 'At grade level', writing_level: 'At grade level', math_level: 'At grade level', teacher_id: teacher2.id)

student10 = Student.create(name: 'Elizabeth George', email: 'egeorge@westvalley.org', home_address: '41 Evergreen Court San Jose, CA 93172',  gpa: 4.0, reading_level: 'Above grade level', writing_level: 'Above grade level', math_level: 'Above grade level', teacher_id: teacher2.id)

student11 = Student.create(name: 'Liam Andrews', email: 'landrews@westvalley.org', home_address: '937 John Avenue San Jose, CA 93172',  gpa: 3.1, reading_level: 'Above grade level', writing_level: 'Below grade level', math_level: 'Above grade level', teacher_id: teacher3.id)

student12 = Student.create(name: 'Joshua Proctor', email: 'jproctor@westvalley.org', home_address: '8680 Randell Mill Drive San Jose, CA 93174',  gpa: 2.1, reading_level: 'Below grade level', writing_level: 'Below grade level', math_level: 'Below grade level', teacher_id: teacher3.id)

student13 = Student.create(name: 'Leslie Wood', email: 'lwood@westvalley.org', home_address: '616 Roosevelt Drive San Jose, CA 93174',  gpa: 2.7, reading_level: 'At grade level', writing_level: 'At grade level', math_level: 'Below grade level', teacher_id: teacher3.id)

student14 = Student.create(name: 'Katie Warren', email: 'kwarren@westvalley.org', home_address: '7043 Central Avenue San Jose, CA 93184',  gpa: 3.3, reading_level: 'Above grade level', writing_level: 'Above grade level', math_level: 'Below grade level', teacher_id: teacher3.id)

student15 = Student.create(name: 'Vera Yu', email: 'vyu@westvalley.org', home_address: '735 Myers Avenue San Jose, CA 93174',  gpa: 3.6, reading_level: 'Above grade level', writing_level: 'Above grade level', math_level: 'Above grade level', teacher_id: teacher3.id)


puts "✅ Done seeding!"
