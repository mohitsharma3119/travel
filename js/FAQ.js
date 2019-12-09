
//Java Script and jQuery for FAQ page

let questions=["How do I ask a question about a specific destination?",
"If we had not satisfaction of the hotel,do you return our money?","Why Has My Username Been Changed?"];
listQuestion();
function listQuestion()
{
    let result="<ol>";
    for(let i=0; i<questions.length;i++)
    {
            result+='<li>' + questions[i] + '</li>';
    }
    result+='</ol>';
    document.getElementById('displaylist').innerHTML = result;
    
    result="<select id='drpquestion'>";
    for(let i=0;i<questions.length;i++)
    {
            result+='<option value="'+ i +'" >'+questions[i]+'</option>';
    }
    result +='</select>';
    document.getElementById('selectlist').innerHTML = result;
}
function addQuestion(question)
{
    let newquestion= document.getElementById('question').value;
    questions.push(newquestion);
    listQuestion();
}
function deleteQuestion()
{
        let selectedQuestion=document.getElementById('drpquestion').value;
        questions.splice(selectedQuestion, 1);
        listQuestion();
}