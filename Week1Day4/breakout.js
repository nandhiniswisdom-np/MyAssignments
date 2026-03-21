let marks = [56,78,90,23,90,76,43,56];
let duplicateMarks=[];
for(let i=0;i<marks.length;i++)
{
    for(let j=i+1;j<marks.length;j++)
    {
        if(marks[i]==marks[j])
        {
        //duplicateMarks++;
           duplicateMarks.push(marks[i]);
        }
    }
}
console.log(duplicateMarks);