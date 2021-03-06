var repeat = true;
$(document).ready(function(){
    ten();
    getXMLRacers();
    $('#btnStop').click(function(){
        repeat =false;
        $('#freq').html("updates paused");
    });
    $('#btnStart').click(function(){
        repeat =true;
        ten();
        show();
    });
});
function ten(){
    setTimeout(function(){
        if(repeat){
            getXMLRacers();
            ten();
        }
    },1000);
}
function show(){
    $('#freq').html("Page refreshes every "+1+"second(s).");
}
function getXMLRacers(){
    $.ajax({
        url:"finishers.xml",
        cache:false,
        dataType:"xml",
        success:function(xml){
            $('#finishers_m').empty();
            $('#finishers_f').empty();
            $('#finishers_all').empty();
            $(xml).find("runner").each(function(){
                var info = '<li>Name: '+$(this).find('fname').text()+' '+$(this).find('lname').text()+'.Time: '+$(this).find('time').text()+'</li>';
                if($(this).find('gender').text() == 'm'){
                    $("#finishers_m").append(info);
                }else if($(this).find('gender').text() == 'f'){
                    $("#finishers_f").append(info);
                }else{}
                $("#finishers_all").append(info);
            });
            getTime();
        },
        error:function(){
            alert("失败");
        },
    });
}  
function getTime(){
    $.ajax({
        url:'time.php',
        cache:false,
        success:function(data){
            $('#updatedTime').html(data);
        }
    });
}
