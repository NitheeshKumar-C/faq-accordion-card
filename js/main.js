var prevPId='';
var prevImg='';
var prevHead='';
function viewDetail(heading,id,image){
    var img=document.getElementById(image);
    var para=document.getElementById(id);
    var head=document.getElementById(heading);
    if(window.getComputedStyle(para).getPropertyValue('display')=='none'){
        para.style.display='block';
        img.classList.remove('arrow-down');
        img.classList.add('arrow-up');
        para.classList.add('para-out');
        head.style.color='hsl(237, 12%, 33%)';
        head.style.fontWeight='700';
        
    }else{
        para.style.display='none';
        prevImg.classList.remove('arrow-up');
        prevImg.classList.add('arrow-down');
        head.style.color='hsl(240, 6%, 50%)';
        head.style.fontWeight='500';
    }
    if(head!=prevHead && prevHead!=''){
        prevHead.style.color='hsl(240, 6%, 50%)';
        prevHead.style.fontWeight='500';
    }
    prevHead=head;
    if(id!=prevPId && prevPId!=''){
        document.getElementById(prevPId).style.display='none';
    }
    prevPId=id;
    // images
    img.classList.add('arrow-up');
    if(img!=prevImg && prevImg!=''){
        prevImg.classList.remove('arrow-up');
        prevImg.classList.add('arrow-down');
    }
    prevImg=img;
}