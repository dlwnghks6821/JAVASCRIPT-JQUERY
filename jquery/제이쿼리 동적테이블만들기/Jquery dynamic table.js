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
//�� �Լ����� ������ ��ư�� �������� ���� ���̺� �����ϴ� ������ �Ѵ�//
.on('click','#btnSubmit',function(){
    //--->�ؽ�Ʈ �ʵ�,������ư���� ���� �Է��ϰ� �� �Է��� ���� �������� ����<---//
    //���Է��� ������������ txt �ʵ� , ���� ��ư�� ���ؼ� ����ڰ� ���� �Է��ϰԵ�.//
    //#txtname �� ��ü�� ���� �ϰ� ���� ������ //
    str1= $('#txtname').val();
      //���� ��ü�� ���� �ϰ� ���� ������ //
    str2= $(":input:radio[name=gender]:checked").val();
    //#mobile�� ��ü�� �����ϰ� ���� ������//
    str3= $('#mobile').val();
    //--->����ڰ� ���� �� �ְ� ��ư�� ������ �� �ʵ��� ������ �ʱ�ȭ �ǰ� �ϴ¿���<---//
    //#txtname��� ��ü�� �����ؼ� �� ���� �������� �����ؼ� �ʱ�ȭ�Ѵ�//
    $('#txtname').val('');
    //#mobile�̶�� ��ü�� �����ؼ� �� ���� �������� �����ؼ� �ʱ�ȭ�Ѵ�//
    $('#mobile').val('');
    //������ư�� ��ü�� �����ؼ� �� ���� unchecked(false)�� �����ؼ� �ʱ�ȭ�� ���ش�//
    $("input:radio[name='gender']:radio[value='����']").prop("checked",false);
    $("input:radio[name='gender']:radio[value='����']").prop("checked",false);
    //���̺��� �������� �߰����ֱ� ���ؼ� .append()��� �Լ��� ����Ѵ�.//
    //'table:eq(0)'���� eq()��°��� �ε����� ����� ������ �ϸ� �� //
    // 'table:eq(0)'�� 1��° ���̺��̶�� ���̴�//
    // 1��° ���̺� ������ ����ڰ� �Է��� ���� �ҷ����� ������ ������ ��ұ� ������ �� ����ȳ�����//
    //������ ���� ������ .append() �ȿ��ٰ� �߰����ֱ⸸ �ϸ� �ȴ�.//

    //ù��° ���̺� (str1)�̶�� ����ڰ� �Է��� ���� �������ش�//
    $('table:eq(0)').append(str1);//==>�̸�<==//
     //ù��° ���̺� (str2)�̶�� ����ڰ� �Է��� ���� �������ش�//
    $('table:eq(0)').append(str2);//==>����<==//
     //ù��° ���̺� (str3)�̶�� ����ڰ� �Է��� ���� �������ش�//
    $('table:eq(0)').append(str3+"<br>");//==>����Ϲ�ȣ<==//
    
   
})
//��ư�� �������� �ʵ�ȿ� �ִ� ��系����� �ʱ�ȭ�����ִ� ������ �Ѵ�//
.on('click','#btnReset',function(){
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='����']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='����']").prop("checked",false);


})
//���̺�Ŭ���� ���̺� �ִ� ���� �ؽ�Ʈ �ʵ忡 �����ϴ� ����
$(document)
//ù��° �ε����� ���̺� (1��° ���̺�) �� ��ü�� ����//
.on('click','table:eq(0)',function(){  
    //debug//
    console.log("hello world");
   //name= $(this).find('td:eq(0)').text();
   //mobile= $(this).find('td:eq(0)').text();
   name = $('table:eq(0) td:eq(0)').text();
   console.log("hello world");
   alert(name);
    
     $('#txtname').val(name);
     $('#mobile').val( mobile);
   
     
     	

})
    



</script>