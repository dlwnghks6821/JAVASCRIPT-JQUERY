<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<style>
    td{
        width:50px;
        height: 30px;
    }
    .class0{
        background:blue;
    }
    .class1{
        background:red;
    }
    .class2{
        background:green;
    }
   
</style> 
<body>
    <div class="table-name">
     <h1>first table[0]</h1>
    </div>
        <table border="1">
    </table><br><br>
    <div class="table-name">
        <h1>second table[1]</h1>
    </div>

    <table>
    <tr>
        <td>�̸�</td><td><input type=text id=txtname size=12></td>
    </tr>
    <tr>
        <td>����</td><td><input type=radio value='female' id=female name=gender>����
        <input type=radio id=male value='male' name=gender>����</td>
    </tr>
    <tr>
        <td>�����</td><td><input type=phone id=mobile></td>
    </tr>
    <tr>
        <td colspan=2>
            <input type=button id=btnSubmit value='�߰�'>&nbsp;
            <input type=button id=btnReset value='�����'></td>
            <input type=button id=btnDelete value="����">
            <input type="button" id=update value="����">
          
    </tr>
    </table>
  

</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
   
   var intest=null;
   var nClick=null;
$(document)

.on('click','#btnSubmit',function(){

    str1= $('#txtname').val();
    str2= $("input:radio[name=gender]:checked").val();
    str3= $('#mobile').val();
    $('#txtname').val('');
    $('#mobile').val('');
    
    $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
    $("input:radio[name='gender']:radio[value='male']").prop("checked",false);

    

  
    $('table:eq(0)').append('<tr><td>'+str1+'</td><td>'+str2+'</td><td>'+str3+'</td></tr>');
     
   
})

.on('click','#btnReset',function(){
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='male']").prop("checked",false);
})

$(document)

.on('click','table:eq(0) tr',function(){ 
     console.log('hh');
     name=$(this).find('td:eq(0)').text();

     //üũ�� ���� (������ư�ǰ�)�� ���̺��� �����ö� text()������//
     checked1= $(this).find("td:eq(1)").text();
     console.log(checked1)
     gender=$('input:radio[name=gender]:input[value="'+checked1+'"]').prop("checked", true);

    //  /(":input:radio[name='gender']:checked")//
     //('td:eq(1)').prop('checked', true);
     mobile=$(this).find('td:eq(2)').text();
     $('#txtname').val(name);
     alert(gender);
     //$(":radio[name='gender']").prop('checked', true);
     $('#mobile').val(mobile);
     $('#gender').val(gender);
     //Ŭ���� tr�������� yellow �� �ٲ��.
     //Ŭ���� tr�� �ε��� ���� nClick�� ����// 
     // $(this).css('background','yellow');
      //nClick=$('table:eq(0)').tr.eq(0).text();
      //Ŭ���� tr �� ����� �������ش�//
      if(nClick>-1){
          //�ѹ� �������� �Ͼ��//
        $('table:eq(0) tr:eq('+nClick+')').css('background-color','white');
      }
      nClick=$(this).index();
      //������ �����//
      $(this).css('background-color','yellow');
   
   
     
     	

})
.on('click','#btnDelete',function(){
   
    //Ŭ���� tr�� ����(.remove())
    //�̸�,����,����� �� �� �������.
    //���̺������//
    $('table:eq(0) tr').eq(0).remove();
    console.log('hi');
})
.on('click','#update',function(){
    //Ŭ���� ���õ� tr���� �̸� ���� ����ϰ���//
    //�Է��ʵ忡 ���� ��,�Է��ʵ��� ���� ����,
    //������Ʈ ��ư�� ������ ���õ� tr���� td�� 
    //��ģ ���� �ִ´�.
    //����//
    update1= $('#txtname').val();
    update2= $("input:radio[name=gender]:checked").val();
    update3= $('#mobile').val();
  //���� ���̺��� ������ ��������Ƿ� �������̺��� ��ǥ���ٰ� ������ ������ ���� ������ �־��ش�//
    $(' table tr:eq(0) td:eq(0)').html(update1)
    $(' table tr:eq(0) td:eq(1)').html(update2)
    $(' table tr:eq(0) td:eq(2)').html(update3)
  

})



</script>