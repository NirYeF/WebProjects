$( document ).ready(function() {
    let cart = [null, 0, 0,null, 0, 0,null, 0, 0,null, 0, 0,null, 0, 0,null, 0, 0];
    let flag=true;
    let prices = [0,0,0,0,0,0];
    let totalPrice=0;
    $('.modal').find('button#transfer').prop('disabled',true);
    $('.add-cart').click(function (e) {
        e.preventDefault();
        $('.modal').find('button#transfer').prop('disabled',false);
        let name = $(this).parent().find(".card-title").text();
        let price = parseFloat($(this).parent().find(".card-text:eq(1)").text()); // casting to a float
        switch (name) {
            case "Cornflakes":
                cart[0] = name;
                cart[1] += price;
                cart[2]++;
                prices[0]=price;
                break;
            case "Mayo" :
                cart[3] = name;
                cart[4] += price;
                cart[5]++;
                prices[1]=price;
                break;
            case "Ketchup" :
                cart[6] = name;
                cart[7] += price;
                cart[8]++;
                prices[2]=price;
                break;
            case "Brocoli" :
                cart[9] = name;
                cart[10] += price;
                cart[11]++;
                prices[3]=price;
                break;
            case "Suger" :
                cart[12] = name;
                cart[13] += price;
                cart[14]++;
                prices[4]=price;
                break;
            case "Pepper" :
                cart[15] = name;
                cart[16] += price;
                cart[17]++;
                prices[5]=price;
                break;
        }
    });
    function Display()
    {
        let ModalBody = $('#myModal').find('.modal-body');
        let ModalFooter = $('#myModal').find('.modal-footer');
        let output="";
        let output2="";
        totalPrice=0;
        $('#totalPrice').remove();
        for (let i = 0; i <= cart.length - 3; i = i + 3) {
                if (cart[i + 1] !== 0 && cart[i + 2] !== 0) {
                    totalPrice += cart[i + 1];
                    output += "<div>" + "  " + "Item:" + cart[i] + "  " + "Price:" + cart[i + 1] + '$' + "  " + "Amount:" + cart[i + 2] + "</div>";
                }
            }
        if(output === "")
        {
            ModalBody.html(output);
            $('.modal').find('button#transfer').prop('disabled',true);
        }
        else
        if(totalPrice != 0)
        {
            output2="<div id='totalPrice'>" + "totalPrice:" + totalPrice + '$' + "</div>";
            ModalBody.html(output);
            ModalFooter.prepend(output2);
        }
    }
   $('.icon_store').click(function ()
    {
        Display();
    });
    $('#transfer1').click(function()
    {
        if(cart[2] > 0)
        {
            cart[1]-=prices[0];
            cart[2]--;
            totalPrice-=prices[0];
            Display();
        }
    });
    $('#transfer2').click(function()
    {
        if(cart[5] > 0)
        {
            cart[4]-=prices[1];
            cart[5]--;
            totalPrice-=prices[1];
            Display();
        }
    });
    $('#transfer3').click(function()
    {
        if(cart[8] > 0)
        {
            cart[7]-=prices[2];
            cart[8]--;
            totalPrice-=prices[2];
            Display();
        }
    });
   $('#transfer4').click(function()
   {
       if(cart[11] > 0)
       {
           cart[10]-=prices[3];
           cart[11]--;
           totalPrice-=prices[3];
           Display();
       }
   });
   $('#transfer5').click(function()
    {
        if(cart[14] > 0)
        {
            cart[13]-=prices[4];
            cart[14]--;
            totalPrice-=prices[4];
            Display();
        }
    });
   $('#transfer6').click(function() {
    if(cart[17] > 0) {
        cart[16] -= prices[5];
        cart[17]--;
        totalPrice -= prices[5];
        Display();
    }
    });
   $("td").mouseover( function(){
       $(this).css('background-color', 'red');
   });
    $("td").mouseout( function(){
        $(this).css('background-color', 'white');
    });
    $(document).mouseleave(function () {
        if(flag === true)
        {
            window.alert("Hey watch out!");
            flag = !flag;
        }
    });
});
