let  students = [
    {
      name: "Cristiano Ronaldo",
      n1: 10,
      n2: 10,
    },
    {
      name: "Messi",
      n1: 9,
      n2: 8,
      },
      {
      name: "Neymar",
      n1: 7,
      n2: 9,
      },
      {
      name: "Mbappe",
      n1: 6,
      n2: 5,
      },
      {
      name: "Marta",
      n1: 8,
      n2: 9,
      },
      {
      name: "Gabigol",
      n1: 6,
      n2: 7,
      },
  ]

  function note (n1, n2){
    return (Number(n1 + n2)/2)
  }
  
  function average(student){
    if (note(student.n1, student.n2) >= 7) 
    {
    alert(`A média do aluno(a) ${student.name} é: ${note(student.n1, student.n2)}
  Parabéns ${student.name}! você foi aprovado(a) no concurso!`)
  } else {(alert(`A média do(a) aluno(a) ${student.name} é: ${note(student.n1, student.n2)}
  Não foi dessa vez ${student.name}! Tente novamente!`))
    }
  }
  
  for (let student of students) {
    average(student)
  }
