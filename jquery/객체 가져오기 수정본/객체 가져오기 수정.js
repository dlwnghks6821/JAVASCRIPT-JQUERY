<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<body>
 <table>
  <tr>
      <td align="right">�Ǹ�</td>
      <td><input type="text" id="txtname" size=20></td>
  </tr>
  <tr>
      <td>�������</td>
      <td><input type="date" id="txtbirth"></td></tr>

   <tr>
    <td>����</td>
   <td><input type="radio" value="����" id="female" name="gender">����&nbsp;
        <input type="radio" value="����" id="male" name="gender">����</td>
  </tr>
  <tr>
      <td>����ھ��̵�</td>
      <td><input type="text"id="userid" size="12"></td>
  </tr>
  <tr>
      <td>��й�ȣ</td>
      <td><input type="password" id="passcode1" size="12"></td>
      <tr><td>��й�ȣ Ȯ��</td></tr>
      <td><input type="password" id="passcode2" size="12"></td>
      <tr><td>��������</td>
        <td><select id="selArea">
            <option>����</option><option>���</option>
            <option>����</option><option>�泲</option>
            <option>���</option><option>�泲</option>
            <option>���</option><option>����</option>
            <option>����</option><option>����</option>
        </select></td></tr>
        <tr><td>���ɺо�</td></tr>
        <td>
        <input type="checkbox" name="interest"value="��ȭ" id="movie">��ȭ
        <input type="checkbox" name="interest" value="������" id="sports">������
        <input type="checkbox" name="interest"value="����"  id="travel">����
        <input type="checkbox" name="interest"value="����"  id="enter">����
        <input type="checkbox" name="interest"value="��ġ"  id="politics">��ġ
        <input type="checkbox" name="interest" value="����" id="economy">����
        </td></tr>
        <tr><td colspan="2">
        <input type="button"id="show"value="�Էº���">&nbsp;
        <input type="button"id="reset" value="����">

    </td></tr>


 </table>

</body>
<script  src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
    //1).$(document).on('click',(������ ��ü�� id��?),function(){����})//
    //2).on('click') == .onclick Ư���� ��ü�� Ŭ���̺�Ʈ�� �����ϴ� ��� //
    $(document)
    .on('click','#reset',function(){
    console.log("hello");
     //���� �����ָ� ��//
     //reset �̶�� �ϴ¹�ư�� ���̵� �����ִµ� �װ��� value �� ����� ���ٸ�//
     //.val() == >��ü�� ���� �������� ������ �Ѵ� //
     //.val() == > prameter �ȿ��Ű� ������ ������ setter ������ �ϰ� ������ ������ getter ������ �Ѵ�//
     //1) rest�̶�� ��ư�� ���� ������ �ϴµ� ���� ó�� ���̰� ������ָ�ǹǷ� 
     //�����ǰ�ü�� setter�� "" (����)���� �ϸ� ����ִ� �� ó�� ���̰� ������ִ�.//
     //ex) a.val("") == > a��� �ϴ� �ʵ忡�� �����ΰ� ó�� ���δ� //
     //2)������������ ��ü�� ����(����)�Ҷ��� $ �� �����ϰ� �����Ϸ��� ��ü��(������� ��ü���̵����)�����ְ� 
     //3).val()���� ��ü ���� �����´ٴ��� �ϴ� �׷��� ��ü�� �����ϴ� �Լ����� �̿��ؼ� ��ü�� �����Ѵ� //


     if($('#reset').val() =="����"){
         //1)�̸��̶�� �ϴ� ��ü�� ���� ���ó�� ���̰� �Ϸ��� �Ѵ�//
         //2)�̸��̶�� �ϴ� ��ü�� ���̵� ���� �����ְ� �״����� .val()�̿��Ͽ��� ��ü�� ���� ����ó�� ���̰� �Ѵ�//
        // �̸��̶�� �ϴ� �ʵ带 ����ó�� ���̰� �ߴ�//
         $("#txtname").val("");
         //������� �̶�� �ϴ� ��ü�� �ʵ带 ����ó�� ���̰� �ߴ� //
         $("#txtbirth").val("");
         //���� ��ư�̶�� ��ü�� �����ϴ� ��� //
         //���� ��ư�� property �� false �� �ϰԵǸ� ==>üũ�� �ȵȻ��°��ȴ�//
         //���� ��ư�� property �� true �� �ϰԵǸ� ==> üũ�� �Ȼ��°� �ǹ�����//
         //�߿��Ѱ��� radio �� name �κ��� �����ؾ��ϰ� value ���� �޶���Ѵ�//
         $("input:radio[name='gender']:radio[value='����']").prop("checked",false);
         $("input:radio[name='gender']:radio[value='����']").prop("checked",false);
         //����� ���̵� ��������//
         //����� ���̵��� ��ü �� .val("")�ؼ� setter ������ ���ָ� �ȴ� //
         $("#userid").val("");
         //������� ��й�ȣ �ʵ带 ��������//
         //����� ��й�ȣ ���̵� ��ü�� �����ؼ� setter ������ ���ָ�ȴ�//
         $("#passcode1").val("");
         //����� ��й�ȣȮ�� �ʵ带 ��������//
         //�� �Ͱ��� ������� �������ָ�ȴ�//
         //�ؽ�Ʈ �ʵ��� ��ü���� .val()�� �̿��ϸ�ȴ�.//
         $("#passcode2").val("");
         //����Ʈ�ڽ�(�޺��ڽ�)�ʱ�ȭ ���ֱ� //
         //����Ʈ �ڽ��� ���������� ó���κп��� ����Ʈ�ڽ��� ��ü�� �����ϱ����� id�� �Է��ϰ� //
         //�״����� ���ݴٸ���  .find ��°��� �̿��Ѵ� //
         //�̷������� �ۼ��ϰԵǸ� ó�� ���õǾ��� ������ ���ư��Եȴ�//
         $('#selArea').find('option:first').attr('selected', 'selected');//����Ʈ�ڽ� �ʱ�ȭ//
         //üũ�ڽ� �ʱ�ȭ(���� �������)//
         //üũ�ڽ� ���ִ� ��ü�� �� ���̵� ���� �Է������ν� ��ü�� �����Ѵ�//
         //.prop�̶��ϴ� �Ӽ� �� ���ؼ� checked�� ���� false ��� ���ԵǸ� �������̹Ƿ� üũ�� �����ȴ�.//
         //���� �� üũ�ڽ��� üũ = true ��üũ�� = false//
         $("#movie").prop("checked", false); 
         $("#sports").prop("checked", false); 
         $("#travel").prop("checked", false); 
         $("#enter").prop("checked", false); 
         $("#politics").prop("checked", false); 
         $("#economy").prop("checked", false); 
        
     }


    });
    //$(document) ==> dom ��ü�� �����ϴ� ���������� ��� 
    //onclick �̶�� �̺�Ʈ�� �����ҰŴ� �׷��� �� �̺�Ʈ�� ������ ���(��ü)�� 
    //#show ��� ���� ���� ��ü�̰� �װ�ü�� ������ �Լ��� ���������ν� �� �Լ��ȿ�  �װ�ü�� �����ϰ� ������//
    //�����ٰ��̴� ��� ����//
    $(document)
    .on('click',"#show",function(){
        if($("#show").val()=="�Էº���");
        //#show��� �ϴ� ���� ���� ��ü�� ���� ==> �����ִ� ���� �̹Ƿ� ���� �޼ҵ�ȿ��� �����ִ� ����//
        //�� �ϴ� ������ �����ָ� �ȴ�//
        //�߿��� ����� .val() �̶�� �Լ��� ��ü�� ���� �������ִ� ���ҵ� �ϰ� ��ü�� ���� �������ִ� ����//
        //�� �ϱ⶧���� //
        //���� ���࿡ ��ü�� ���� �����ö��� �Ű������� ������ϰ� ��ü�� ���� �����Ҷ��� �Ű�������
        //�ݵ�� �־���Ѵ�//
        //����� �� �޼ҵ� �ȿ����� ��ü�� ���� ��ȯ�ϴ� ������ �ϴ� �޼ҵ��̹Ƿ� 
        //.val() �̶�� �Լ��� ����Ҷ� �ݵ�� �Ű������� ���� .val()�Լ��� ����Ѵ�//
        //1.�Ǹ��̶�� �ʵ带 ���� ��ü�� �����ϰ� �� ��ü�� ���� ��ȯ�ϵ��� �ϴ¹��//
      
        str1 = $("#txtname").val();
        //2.��������̶�� �ʵ带 ���� ��ü�� �����ϰ� �� ��ü�� ���� ��ȯ�ϵ��� �ϴ¹��//
        str2 = $("#txtbirth").val();
        //3.�����̶��(�����ڽ�)�ʵ带 ���� ��ü�� �����ϰ� �װ�ü�� ���� ��ȯ�ϵ��� �Ѵ�//
        //�Ʒ� �ڵ�� ���õ� ���� ���� �������� �ڵ��̴�(üũ�� ���� ���� ��ȯ���ִ¹��//
        str3= $(":input:radio[name=gender]:checked").val();
        4//����� ���̵���(�ؽ�Ʈ)�ʵ带 ���� ��ü�� �����ϰ� �װ�ü�� ���� ��ȯ�ϵ��� �Ѵ�//
        str4=$("#userid").val();
        5//��й�ȣ��� (�ؽ�Ʈ)�ʵ带 ���� ��ü�� �����ϰ� �װ�ü�� ���� ��ȯ�ϵ��� �Ѵ�//
        str5=$("#passcode1").val();
        6//��й�ȣ Ȯ���̶��(�ؽ�Ʈ)�ʵ带 ���� ��ü�� �����ϰ� �װ�ü�� ���� ��ȯ�ϵ��� �Ѵ�//
        str6=$("#passcode2").val();
        7//���������̶�� (����Ʈ�ڽ�)�ʵ带 ���� ��ü�� �����ϰ� �װ�ü�� ���� ��ȯ�ϵ��� �Ѵ�//
        str7=$('#selArea').val();
        8//���ɺо߶�� (üũ�ڽ�) �ʵ带 ���� ��ü�� �����ϰ� �װ�ü�� ���� ��ȯ�ϵ��� �Ѵ�//
        //����� üũ�� ��ü�� �����ϰ� üũ�Ȱ�ü�� ���� ��ȯ�ϴ� ����̴�//
        //.each()�Լ��� ����//
        //$('input[type="checkbox"]:checked')==> üũ�ڽ���� �ϴ� ��ü�� �����ϴ°��̰� �׸��� 
        //�� üũ�ڽ��� üũ�� üũ�ڽ��� ��ü�� �����ϴ� ����̴�//
        //this.==> ��ü �ڽ��� ����Ű�� ���̴� //
        //each��  ���//
        //each ���� input type �� üũ�ڽ��� �Ϳ�����  �ϳ��ϳ� �����Ѵ� (for���������)//
        //each �� all�� ���� //
        //.each �� �͸��Լ���� �Ѵ�//
        /*each �� ����ġ���� ����ؼ� ����//
        var str='';
        $('input:checkbox').each(function(){
        switch($(this)).prop('id'));
        case:'movie':
            str=str+'��ȭ';
            break;
        case:'sports':
        str=str+'������';
            break;
        case:'travel':
        str=str+'����';
            break;
        case:'enter':
        str=str+'����';
            break;
        case:'politics':
        str=str+'��ġ';
            break;
        case:'movie':
        str=str+'��ȭ';
            break;
        });
        */
       //��ü�� �̿��ϴ� ���//
       //1.��ü�� �����������ش�//
       var interest={'movie':'��ȭ','sports':'������','travel':'����','enter':'����',
       'politics':'��ġ','economy':'����'};
       var str="";
       //���̵� �̾ƿͼ� �� ���� str�� �ٿ��ش�.
       $('input:checkbox:checked').each(function(){
           //��ü���� ���� ���������� �迭ó�� �ε����� �Է��ϴ°��� �ƴ� Ű ���� �Է��Ѵ� (key)//
           //ex movie : ��ȭ//
           //movie �� key �̰� ��ȭ�� value �̴�//
           //��ü�� key���̿��ؼ� ã�����ְ� �迭�� �ε����� �̿��ؼ� ã�����ִ�//
           
         str+=interest[key];
       });
        var str8 ="";
        $('input[type="checkbox"]:checked').each(function (index) {
            if (index != 0) {
        str8 += ', ';
        }
        str8 += $(this).val();
       });
        
        alert(str1+("\n")+str2+("\n")+str3+("\n")+str4+("\n")+str5+("\n")+str6+("\n")+str7+("\n")+str8);


    });


    //�Ǵٸ����//
        /*if($('input:checkbox[id=movie]').is(':checked')){
            str=str+'��ȭ';

        }
        if($('input:checkbox[id=sport]').is(':checked')){
            str=str+',������';

        }
        if($('input:checkbox[id=travel]').is(':checked')){
            str=str+',����';

        }
        
        if($('input:checkbox[id=politics]').is(':checked')){
            str=str+'��ġ';

        }
        if($('input:checkbox[id=economy]').is(':checked')){
            str=str+',����';

        }
        if($('input:checkbox[id=travel]').is(':checked')){
            str=str+',����';

        }
        */


</script>