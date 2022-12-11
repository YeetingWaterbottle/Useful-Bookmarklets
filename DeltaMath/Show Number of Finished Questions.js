// Bookmarklet Created With Bookmarkleter: https://chriszarate.github.io/bookmarkleter/
// Copy the line below and create a bookmark with the url field set to it ⤵
javascript:void function(){let a=[];for(let b of document.querySelectorAll(".panel-body")){let c=0,d=0;for(let a of b.children[0].children){let b=a.querySelector(".record-span").innerText.trim();b=2==b.split("%").length?"100"==b.split("%")[0]?["1","1"]:["0","1"]:b.split("/"),b[0]=parseInt(b[0]),b[1]=parseInt(b[1]),b[0]>b[1]&&(b[0]=b[1]),c+=b[0],d+=b[1]}a.push(`${c}/${d}`)}for(let[b,c]of document.querySelectorAll(".complete-span").entries()){c.style.whiteSpace="pre";let d=c.innerText;c.innerText=`Total: ${a[b]}\t\t${d}`}console.log(a)}();


/* Original Javascript Code Below
let all_assignment_score = [];
for (let assignment of document.querySelectorAll(".panel-body")) {
    let total_finished = 0;
    let total_questions = 0;
    for (let problem of assignment.children[0].children) {
        let score = problem.querySelector(".record-span").innerText.trim();
        if (score.split("%").length == 2) {
            // check if problem is a timing question, sets score variable to responding points.
            if (score.split("%")[0] == "100") {
                score = ["1", "1"];
            } else {
                score = ["0", "1"];
            }
        } else score = score.split("/");

        score[0] = parseInt(score[0]);
        score[1] = parseInt(score[1]);

        if (score[0] > score[1]) score[0] = score[1]; // checks current amount of problems answered for a question, if more than required, sets the total to maxmium.

        total_finished += score[0];
        total_questions += score[1];
    }
    all_assignment_score.push(`${total_finished}/${total_questions}`);
}

for (let [index, grade_label] of document.querySelectorAll(".complete-span").entries()) {
    grade_label.style.whiteSpace = "pre"; // sets new css rule to add empty space character.
    let percentage = grade_label.innerText;
    grade_label.innerText = `Total: ${all_assignment_score[index]}\t\t${percentage}`;
}

*/