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
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
       
       
    </table>

</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
    //4X5 ���̺� 1���� 20���� ���ڸ� �־ ǥ���Ѵ�//
    //(.text())
    //���������� �ε� �ɶ�, �� ���� ǥ�ð��ȴ�//
    //3�� �Ŀ� ���ڰ� ��� �������//
     var nClick = null;
     var bk = null;
     var ndx = null;
     var v1=null;
     var count = 1; 
$(document)
.ready(function(){
    //�ؽ�Ʈ ��������ϱ�//
    //$('table tr:eq(0) td:eq(1)').css('color','white');
    setTimeout(function(){
       $('table td').css('color','white');
    
    },1000)
    for(var i = 0 ; i<5; i++){
       for(var j = 0 ; j <4; j++){
           $('table tr:eq('+i+') td:eq('+j+')').text(count++);
       }
    }
    /*
    $('table tr:eq('+0+') td:eq('+0+')').text(1);
    $('table tr:eq('+0+') td:eq('+1+')').text(2);
    $('table tr:eq('+0+') td:eq('+2+')').text(3);
    $('table tr:eq('+0+') td:eq('+3+')').text(4);
    $('table tr:eq('+1+') td:eq('+0+')').text(5);
    $('table tr:eq('+1+') td:eq('+1+')').text(6);
    $('table tr:eq('+1+') td:eq('+2+')').text(7);
    $('table tr:eq('+1+') td:eq('+3+')').text(8);
    $('table tr:eq('+2+') td:eq('+0+')').text(9);
    $('table tr:eq('+2+') td:eq('+1+')').text(10);
    $('table tr:eq('+2+') td:eq('+2+')').text(11);
    $('table tr:eq('+2+') td:eq('+3+')').text(12);
    $('table tr:eq('+3+') td:eq('+0+')').text(13);
    $('table tr:eq('+3+') td:eq('+1+')').text(14);
    $('table tr:eq('+3+') td:eq('+2+')').text(15);
    $('table tr:eq('+3+') td:eq('+3+')').text(16);
    $('table tr:eq('+4+') td:eq('+0+')').text(17);
    $('table tr:eq('+4+') td:eq('+1+')').text(18);
    $('table tr:eq('+4+') td:eq('+2+')').text(19);
    $('table tr:eq('+4+') td:eq('+3+')').text(20);
    */
})
//Ŭ���ÿ� ���� ���ϴ� ���� ���ڰ� ��Ÿ���� �ϱ� // 
.on('click','td',function(){
    //
    if(ndx>-1)  $('table tr:eq('+v1+') td:eq('+ndx+')').css('color','white');
    
    //�Լ��� �ٽ��ݹ��ϱ����ؼ� ndx �� ���������� �������ش�.//
    //�������� tr �ε��� , tr �������� ����//
    // ����tr�� ���ڻ�//

    ndx = $(this).index();//���� td�� �ε���//
    v1= $(this).closest('tr').index();  // ���� tr�� �ε���
    $(this).css('color','black');


})



</script> 