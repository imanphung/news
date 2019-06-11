document.addEventListener('DOMContentLoaded',function(){
    //-------------Start Category---------------
    //edit category
    var btnEdit=document.querySelectorAll('tbody tr td #btnEdit');
    var idCategory=document.getElementsByClassName('idCategory');
    var oderCategory = document.getElementsByClassName('oderCategory');
    var nameCategory = document.getElementsByClassName('nameCategory');
    var inputOder = document.getElementById('inputOder');
    var inputName=document.getElementById('inputName');
    var addCategory = document.getElementsByClassName('addCategory');
    var editCategory =  document.getElementsByClassName('editCategory');
    var formEditCategory= document.getElementById('formEditCategory');
    for(let i=0;i<btnEdit.length;i++){
        btnEdit[i].onclick=function(){
            inputOder.value=oderCategory[i].innerText;
            inputName.value= nameCategory[i].innerText;
            addCategory[0].classList.add('hideAddCategory');
            editCategory[0].classList.add('showEditCategory');
            formEditCategory.action="category/edit/"+idCategory[i].innerText;
        };
    }
    //Show add category
    var btnAdd = document.getElementById('btnAddCategory');
    btnAdd.onclick = function(){
        addCategory[0].classList.remove('hideAddCategory');
        editCategory[0].classList.remove('showEditCategory');
    };

    //Delete Category
    var btnDelete=document.querySelectorAll('tbody tr td #btnDelete');
    var formDeleteCategory = document.getElementById('formDeleteCategory');
    for(let i=0;i<btnDelete.length;i++){
        btnDelete[i].onclick=function(){
            formDeleteCategory.action="category/delete/"+idCategory[i].innerText;
        };
    }

    //----------End Category------------

},false);