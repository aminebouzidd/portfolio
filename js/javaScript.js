function verif(){
    var score=0;
    //Question 1
    var quiz1 = document.form.quiz1.value;
    if(quiz1==1){
        score++;
        console.log('quiz1')
    }
    //Question 2
    var quiz2 = document.form.quiz2.value;
    if(quiz2==1){
        score++;
        console.log('quiz2')
    }
    //Question 3
    var quiz3 = document.form.quiz3.value;
    if(quiz3==1){
        score++;
        console.log('quiz3')
    }
    //Question 4
    var quiz4 = document.form.quiz4.value;
    if(quiz4==1){
        score++;
        console.log('quiz4')
    }
    //Question 5
    var quiz5 = document.form.quiz5.value;
    if(quiz5==1){
        score++;
        console.log('quiz5')
    }
    //Question 6
    var quiz6 = document.form.quiz6.value;
    if(quiz6==1){
        score++;
        console.log('quiz6')
    }
    //Question 7
    var quiz7 = document.form.quiz7.value;
    if(quiz7==1){
        score++;
        console.log('quiz7')
    }
    //Question 8
    var quiz8 = document.form.quiz8.value;
    if(quiz8==1){
        score++;
        console.log('quiz8')
    }
    //Question 9
    var quiz9 = document.form.quiz9.value;
    if(quiz9==1){
        score++;
        console.log('quiz9')
    }
    //Question 10
    var quiz10 = document.form.quiz10.value;
    if(quiz10==1){
        score++;
        console.log('quiz10')
    }
    if(score>5)
        alert('Vous gagnez. Votre score est '+score)
    else alert('Tu as perdu. Votre score est '+score)
}