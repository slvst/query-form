<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    jQuery( document ).ready(function( $ ){
        for( let i=1 ; i<=6 ; i++ ){
            // 任何select裡的元素有變動，則隱藏或顯示指定欄位
            
            // 觸發 Has_Kid Select Change 事件 
            $("#form-field-has_kids").change( function () {
                // 由option裡選擇所有已被選取的項目
                if( parseInt( $("#form-field-has_kids option:selected").val() ) >= i ) {
                    if( screen.width>540 ){
                        document.getElementsByClassName( "elementor-field-group-kid_name_"+i )[0].setAttribute("style", "display:block; border-top:1px dashed #888; margin:10px 0; padding: 10px 10px 5px 10px;");
                        document.getElementsByClassName( "elementor-field-group-kid_birthday_"+i )[0].setAttribute("style", "display:block; border-top:1px dashed #888; margin:10px 0; padding: 10px 10px 5px 10px;");
                        document.getElementsByClassName( "elementor-field-group-kid_gender_"+i )[0].setAttribute("style", "display:block; border-top:1px dashed #888; margin:10px 0; padding: 10px 10px 5px 10px;");
                        if( parseInt( $("#form-field-has_kids option:selected").val() ) == i ) {
                            document.getElementsByClassName( "elementor-field-group-kid_name_"+i )[0].setAttribute("style", "display:block; border-top:1px dashed #888; border-bottom:1px dashed #888; margin:10px 0; padding: 10px 10px 25px 10px;");
                            document.getElementsByClassName( "elementor-field-group-kid_birthday_"+i )[0].setAttribute("style", "display:block; border-top:1px dashed #888; border-bottom:1px dashed #888; margin:10px 0; padding: 10px 10px 25px 10px;");
                            document.getElementsByClassName( "elementor-field-group-kid_gender_"+i )[0].setAttribute("style", "display:block; border-top:1px dashed #888; border-bottom:1px dashed #888; margin:10px 0; padding: 10px 10px 25px 10px;");
                        }
                    } else {
                        document.getElementsByClassName( "elementor-field-group-kid_name_"+i )[0].setAttribute("style", "display:block; border-top:1px dashed #888; margin:5px 0; padding: 10px 10px 0;");
                        document.getElementsByClassName( "elementor-field-group-kid_birthday_"+i )[0].setAttribute("style", "display:block; margin:5px 0; padding: 0px 10px;");
                        document.getElementsByClassName( "elementor-field-group-kid_gender_"+i )[0].setAttribute("style", "display:block; margin:5px 0; padding: 0px 10px 10px;");
                        if( parseInt( $("#form-field-has_kids option:selected").val() ) == i ) {
                            document.getElementsByClassName( "elementor-field-group-kid_name_"+i )[0].setAttribute("style", "display:block; border-top:1px dashed #888; margin:5px 0; padding: 10px 10px 0;");
                            document.getElementsByClassName( "elementor-field-group-kid_birthday_"+i )[0].setAttribute("style", "display:block; margin:5px 0; padding: 0px 10px;");
                            document.getElementsByClassName( "elementor-field-group-kid_gender_"+i )[0].setAttribute("style", "display:block; border-bottom:1px dashed #888; margin:5px 0; padding: 0px 10px 20px;");
                        }    
                    }
                } else {
                    document.getElementsByClassName( "elementor-field-group-kid_name_"+i )[0].setAttribute("style", "display:none;");
                    document.getElementsByClassName( "elementor-field-group-kid_birthday_"+i )[0].setAttribute("style", "display:none;");
                    document.getElementsByClassName( "elementor-field-group-kid_gender_"+i )[0].setAttribute("style", "display:none;");
                }   
            }).trigger('change'); 
        }
    
       // 觸發 check box click 事件    
       $( "input[type=checkbox]" ).on( "click", function () {
            if( $("#form-field-consult_about-1").is(":checked") || $("#form-field-consult_about-2").is(":checked") || $("#form-field-consult_about-3").is(":checked") ) {
                $("#form-field-consult_about-0").prop('checked', true);
            } else {
                $("#form-field-consult_about-0").prop('checked', false);
            }
            if( $("#form-field-consult_about-5").is(":checked") || $("#form-field-consult_about-6").is(":checked") ) {
                $("#form-field-consult_about-4").prop('checked', true);    
            } else {
                $("#form-field-consult_about-4").prop('checked', false);
            }
            if( $("#form-field-consult_about-8").is(":checked") || $("#form-field-consult_about-9").is(":checked") || $("#form-field-consult_about-10").is(":checked") ) {
                $("#form-field-consult_about-7").prop('checked', true);    
            } else {
                $("#form-field-consult_about-7").prop('checked', false);
            }
            if( $("#form-field-consult_about-12").is(":checked") || $("#form-field-consult_about-13").is(":checked") || $("#form-field-consult_about-14").is(":checked") || $("#form-field-consult_about-15").is(":checked") ) {
                $("#form-field-consult_about-11").prop('checked', true);    
            } else {
                $("#form-field-consult_about-11").prop('checked', false);
            }
            if( $("#form-field-consult_about-17").is(":checked") || $("#form-field-consult_about-18").is(":checked") || $("#form-field-consult_about-19").is(":checked") || $("#form-field-consult_about-20").is(":checked") ) {
                $("#form-field-consult_about-16").prop('checked', true);    
            } else {
                $("#form-field-consult_about-16").prop('checked', false);
            }
            if( $("#form-field-consult_about-22").is(":checked") ) {
                $("#form-field-consult_about-21").prop('checked', true);    
            } else {
                $("#form-field-consult_about-21").prop('checked', false);
            }
            // 早產選項顯示懷孕周期
           $( ".elementor-field-group-consult_pregnancy" ).insertAfter( "label[for='form-field-consult_kidstatus-0']" );
            if( $( "#form-field-consult_kidstatus-0" ).is( ":checked" ) ){
                $( ".elementor-field-group-consult_pregnancy" ).attr( "style", "display:block;" );   
            } else {
                $( ".elementor-field-group-consult_pregnancy" ).attr( "style", "display:none;" );     
            }
           
        } );
    
        // 新增手機號碼及簡訊碼驗證按鈕，並設定手機驗證按鈕位置與樣式
        var phoneButtonDiv = $('<div class="phone-sms-input-div"></div>'); // 新增 手機號碼輸入欄位+驗證鈕 新區塊
        var SMSButtonDiv = $('<div class="phone-sms-input-div"></div>'); // 新增 簡訊碼輸入欄位+驗證鈕 新區塊
        $( ".elementor-field-group-consult_phone" ).append( phoneButtonDiv ); // 手機號碼區塊 插入新區塊
        $( ".elementor-field-group-consult_sms" ).append( SMSButtonDiv ); // 簡訊碼區塊 插入新區塊
        var phoneInput = $( "#form-field-consult_phone" ); // 手機號碼輸入欄位
        var SMSInput = $( "#form-field-consult_sms" ); // 簡訊碼輸入欄位
        phoneButtonDiv.append( phoneInput ); // 新區塊內 插入手機號碼輸入欄位 
        SMSButtonDiv.append( SMSInput ); // 新區塊內 插入簡訊碼輸入欄位 
        phoneButtonDiv.append( "<div id='phone-verify-div' style='width:44%; text-align:left;'><button type='button' id='phone-verify' class='verify-button' >驗證<br>手機號碼</button></div>" ); // 新區塊內 插入手機驗證鈕 
        SMSButtonDiv.append( "<div id='sms-verify-div' style='width:44%; text-align:left;'><button type='button' id='sms-verify' class='verify-button' >驗證<br>簡訊碼</button></div>" ); // 新區塊內 插入簡訊碼驗證鈕 


//        // 將手機驗證及簡訊碼驗證按鈕class設成與submit相同
//        var submitClass = "";
//        submitClass = $( "button[type=submit]" ).attr( "class" );
//        $( ".verify-button" ).attr( "class", submitClass );
    
        // 手機驗證按鈕的hover樣式
        $( "#phone-verify" ).hover( function(e){
           $( "#phone-verify" ).css( "background-color", "#7A7A7A" );
        }, function(e){
           $( "#phone-verify" ).css( "background-color", "#54595F" );
        });
    
        // 簡訊驗證按鈕的hover樣式
        $( "#sms-verify" ).hover( function(e){
           $( "#sms-verify" ).css( "background-color", "#7A7A7A" );
        }, function(e){
           $( "#sms-verify" ).css( "background-color", "#54595F" );
        });
        
        let phoneErrorMessage = $('<div class="error-message"></div>');
        phoneErrorMessage.insertAfter(phoneButtonDiv);
    
        // 觸發 手機驗證button click 事件，依手機號碼正確性，來決定是否顯示簡訊驗證碼輸入欄位
        $( "#phone-verify-div button[type=button]" ).click( function (e) {
            e.preventDefault();
            $( ".elementor-field-group-consult_sms" ).slideUp(1);
            let phoneFormTW = /^09[0-9]{2}-?[0-9]{3}-?[0-9]{3}$/;
            let phoneFormOther = /^\+[0-9]{1,4}-?\s?[0-9\-]{6,11}$/;
            if( !( phoneFormTW.test( phoneInput.val() ) || phoneFormOther.test( phoneInput.val() ) ) ) {
                // 隱藏 輸入驗證碼欄位
                $( ".elementor-field-group-consult_sms" ).css( "display", "none" );
                // 顯示 手機格式輸入錯誤 訊息
                $(".error-message").html("手機格式輸入錯誤！ 請輸入正確的手機號碼格式：台灣手機請輸入 0912345678 、 0912-345678 、 0912-345-678； 非台灣手機請 去掉0加上加號\"+\"及國碼 ( 如：台灣+886、香港+852、美國+1 ...... )");  
            } else {
                // 隱藏 手機格式輸入錯誤 訊息
                $(".error-message").html("");
                // 顯示 輸入驗證碼欄位
                $('#phone-verify').toggleClass('sms-toggle');
                $( ".elementor-field-group-consult_sms" ).slideDown();
            }


      });
    });
</script>