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
    <table border="1">
    </table><br><br>
    <table>
    <tr>
        <td>�̸�</td><td><input type=text id=txtname size=12></td>
    </tr>
    <tr>
        <td>����</td><td><input type=radio value = '����' id=female name=gender>����
        <input type=radio id=male value = '����'name=gender>����</td>
    </tr>
    <tr>
        <td>�����</td><td><input type=phone id=mobile></td>
    </tr>
    <tr>
        <td colspan=2><input type=button id=btnSubmit value='�߰�'>&nbsp;
            <input type=button id=btnReset value='�����'></td>
          
    </tr>
    </table>
  



</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
   //�̸� ���� ��������� �Է��ϰ� �߰� ��ư�� (btnSubmit)������
   //���̺� ����(tr)�� �߰��Ǹ鼭 ���ÿ� 3����(td)�� ���� ���µ�
   //�� td�� �̸� ���� ����Ϲ�ȣ �� �����Ѵ�//
$(document)
.on('click','#btnSubmit',function(){
        str1= $('#txtname').val();
        str2= $(":input:radio[name=gender]:checked").val();
        str3= $('#mobile').val();
        $('table:eq(0)').append(str1);
        //$('table').append("<tr><td>"+str1+"</td><tr>");
        $('table:eq(0)').append(str2);
        $('table:eq(0)').append(str3+"<br>");
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='����']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='����']").prop("checked",false);
    
   
})
.on('click','#btnReset',function(){
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='����']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='����']").prop("checked",false);


})
//���̺�Ŭ���� ���̺� �ִ� ���� �ؽ�Ʈ �ʵ忡 �����ϴ� ����
$(document)
.on('click','table:eq(0) ',function(){
     a1 = $(this).eq(0).text();
	
           
   alert(a1+("\n"));	

})
    



</script>