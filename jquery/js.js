<script language="javascript">
//td���� �ؽ�Ʈ�� �������� ���// 
//�±׸� �����Ҷ��� #�� �����ʴ´�//
var intset = null;
$(document)

.on('click','#btnGo',function(){
   //rnum=���� cnum=����//
   var rnum=0,cnum=0 , n=0;
  
   intset=setInterval(function(){ 
       $('table tr:eq('+rnum+')td:eq('+cnum+')').text(n++);
      cnum++;
      if(cnum>2){ 
      cnum=0;
      rnum++;
      if(rnum>2){
          cnum=0;
          rnum=0;
      }
      }
},300);
return false;
})

// ����//
.on('click','#btnStop',function(){
  if(intset!=null) clearInterval(intset);
})
