import {useState} from 'react'

export default function NewStudentForm({teacher, addStudent}) {

    const [studentName, setStudentName] = useState('')
    const [email, setEmail] = useState('')  
    const [homeAddress, setHomeAddress] = useState('')
    const [gpa, setGpa] = useState('')
    const [readingLevel, setReadingLevel] = useState('')
    const [writingLevel, setWritingLevel] = useState('')
    const [mathLevel, setMathLevel] = useState('')
    console.log(teacher.id)

    function handleSubmit(e) {
        e.preventDefault()

        console.log('hello')
        console.log(studentName)

        addStudent(studentName, email, homeAddress, readingLevel, writingLevel, mathLevel, teacher)

    }


    return (
        <form onSubmit={handleSubmit}>
             <input className = "name-input" type="text" placeholder="Add Full Name" value={studentName} onChange={(e) => setStudentName(e.target.value)}/>
             <input className = "email-input" type="text" placeholder="Provide Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
             <input className = "home-address-input" type="text" placeholder="Provide Home Address" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)}/>
             <input className = "gpa-input" type="integer" placeholder="Grade Point Average" value={gpa} onChange={(e) => setGpa(e.target.value)}/>
             <input className = "reading-level-input" type="text" placeholder="Provide Reading Level" value={readingLevel} onChange={(e) => setReadingLevel(e.target.value)}/>
             <input className = "writing-level-input" type="text" placeholder="Provide Writing Level" value={writingLevel} onChange={(e) => setWritingLevel(e.target.value)}/>
             <input className = "math-level-input" type="text" placeholder="Provide Math Level" value={mathLevel} onChange={(e) => setMathLevel(e.target.value)}/>
             <input className = "submit-input" type="submit" name="submit" value="Submit"/>
        </form>
    )
}