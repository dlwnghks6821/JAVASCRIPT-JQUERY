<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<body> 
 <table style="border:1px solid black;">
  <tr>
      <td>1</td> <td>2</td> <td>3</td>

  </tr>

  <tr>
    <td>4</td> <td>5</td> <td>6</td>

</tr>

<tr>
    <td>7</td> <td>8</td> <td>9</td>

</tr>

    </table><br>
    <input type="text" id="txtstr">
    <input type="text" id='rnum' size=3>
    <input type="text" id='cnum' size=3>
    <input type="button" id='btnGo' value="����">
    <input type="button" id="btnStop" value="�ð�����">
    



</body>
<script  src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
//td���� �ؽ�Ʈ�� �������� ���// 
//�±׸� �����Ҷ��� #�� �����ʴ´�//
var intSet = null;
$(document)
//���� �Է��ϸ� ���̺� ���� ������ ���//

//�����ġ�� �Է��Ұ����� ���̺��� ��ǥ �� ����//
//tr = ���� (column)�� , td = ����(row)��//
//��ġ 2���� �迭ó�� ���ָ�ȴ�//
.on('click','#btnGo',function(){
    ////���̺� �����ֱ�
    var str='<img src="">'
    var rnum=$('#rnum').val();
    var cnum=$('#cnum').val();
    //$('table tr:eq('+rnum+')td:eq('+cnum+')').text(str);
    //html�ν� ������ �ִ´�
    //setTimeout//
    //���� �ð��� �Լ��� ȣ���ϴ�����//
    setTimeout(function(){
        $('table tr:eq('+rnum+') td:eq('+cnum+')').html(str);
        },3000)
    //setInterval//
    //�����ð� �������� �Լ��� ȣ��, �ݺ����ִ� ������ ��//
       intSet=setInterval(function(){
            $('table tr:eq('+rnum+') td:eq('+cnum+')').text(new Date());
        },1000);

    
    //
    //var row='<tr><td>10</td><td>11</td><td>12</td></tr>';
    //append �޼ҵ� = �߰��ϴ� 
    //append ��, td������ŭ ���缭 ����Ѵ�//
    //append�� ���̺� �ؿ� �� �߰����ȴ� //
    //$('table tr:eq(0)').append(row);
    //prepend�޼ҵ�� �տ��ִ� ���̺��� �߰��ȴ� //
    //$('table').prepend(row);


  
    return false;
 
})

// ����//
.on('click','#btnStop',function(){
  if(intSet!=null) clearInterval(intSet);
});
</script>