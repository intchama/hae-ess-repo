

$('.add-btn').on('click', function(){
    // alert($(this).parent().text())
    $('#myModal').modal('show')
})

// -var names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// -var days = [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2];

// .calendar-container
//   .calendar-header
//     h1 
//       | November
//       button ▾
//     p 2018
//   .calendar
//     - for(i=0;i<7;i++)
//       span.day-name= names[i]

//     - for(j=0;j<35;j++)
//       - if(j == 0 || j == 1 || j == 33 || j == 34)
//         div.day.day--disabled= days[j]

//       - else   
//         div.day= days[j]
//     section.task.task--warning Projects
//     section.task.task--danger Design Sprint
//     section.task.task--primary Product Checkup 1
//      .task__detail
//         h2 Product Checkup 1
//         p 15-17th November
//     section.task.task--info Product Checkup 2