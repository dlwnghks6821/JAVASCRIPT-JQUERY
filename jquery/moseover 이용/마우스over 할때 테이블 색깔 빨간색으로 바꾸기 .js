<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<style>
td{
    width:100px;
    height: 36px;

}

</style> 
<body>
    <table border="1">
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    </table>

</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">

   var intest=null;
   var nClick=null;
   var bk =null;
   var bk1 =null;
   var p = null;
   
$(document)
.ready(function(){
    console.log('hh');
    $('table tr:even').css('background-color','yellow');
    console.log('hh');
    $('table tr:odd').css('background-color','blue');
})
//�ε����� ¦���� tr�� ��� ���� //:odd , even ,css
//�ε����� Ȧ���� tr�� �������� �Ķ����� 
.on('mouseover','tr',function(){
   //�����ε����� -1���� ũ�� 
    if(4%2==0){
         bk 
    }else{
        bk1
    }
    bk = $('table tr:even').css('background-color','yellow');
    bk1=$('table tr:odd').css('background-color','blue');
    p = $(this).index();
    console.log('hi');
    $('table tr:eq('+p+')').css('background-color','red');


    
    //�������� red�� ����//
    //������ �ִ� tr�� ���� ������ ����//
    //���� tr�� �������� ����.
    //.css('background-color','red');
    //var bk = ~.css('background-color')
    //.index()��� , ���� �������� ���� 
    //������ �������� red�� ����//
})



</script> 