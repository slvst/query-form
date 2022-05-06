<?php
/******************************************** SMS 驗證 ************************************************/
// 載入諮詢表單頁面時載入SMS API
function require_smsapi( $post_object ) {
    //設定要諮詢表單的Post ID
    $query_form_postid = 3770;
    $post_id = $post_object->ID;
    if( $post_id === $query_form_postid ) {
        require $_SERVER['DOCUMENT_ROOT']."/sms-api/class/smsapi.php"; 
        $smsapi = new smsapi();
        if( !empty($smsapi) ) {
            file_put_contents( "require_smsapi_log.txt", "\nSMS API Has Been Set!\n" );    
        } else {
            file_put_contents( "require_smsapi_log.txt", "\nSMS API Is Not Set!\n" );  
        }
    }
}
add_action( 'the_post', 'require_smsapi' );

// 驗證輸入手機格式
add_action( 'elementor_pro/forms/validation/tel', function( $field, $record, $ajax_handler ) {
    if ( preg_match("/^09[0-9]{2}-[0-9]{3}-[0-9]{3}$/", $str ) ) {
        return true;    // 09xx-xxx-xxx
    } else if( preg_match("/^09[0-9]{2}-[0-9]{6}$/", $str ) ) {
        return true;    // 09xx-xxxxxx
    } else if( preg_match("/^09[0-9]{8}$/", $str ) ) {
        return true;    // 09xxxxxxxx
    } else {
        $ajax_handler->add_error( $field['id'], '請輸入正確的手機號碼格式：台灣手機請輸入 0912345678 、 0912-345678 、 0912-345-678 或 去掉0加上國碼 ( 台灣+886、香港+852、美國+1 ...... ) ' );
        return false;
    }
}, 10, 3 );
/***************************************** END SMS 驗證 ***********************************************/


/*************************************** 表單取得使用者資訊 *********************************************/
function elementor_form_fill_form_with_userdata() {
    if ( is_user_logged_in() ) {
        $elementor_form_current_user = wp_get_current_user();
//        $elementor_form_user_name = $elementor_form_current_user->user_login;
        $elementor_form_user_billing_first_name = get_user_meta($elementor_form_current_user->ID, 'billing_first_name',true);
        $elementor_form_user_billing_last_name = get_user_meta($elementor_form_current_user->ID, 'billing_last_name',true);
        $elementor_form_user_name = $elementor_form_user_billing_last_name." ".$elementor_form_user_billing_first_name;
        $elementor_form_user_email = $elementor_form_current_user->user_email;
        $elementor_form_user_phone = get_user_meta($elementor_form_current_user->ID, 'billing_phone',true);
        echo "
            <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
            <script>
            jQuery( document ).ready(function( $ ){
                $('#form-field-consult_name').val('{$elementor_form_user_name}');
                $('#form-field-consult_email').val('{$elementor_form_user_email}');
                $('#form-field-consult_phone').val('{$elementor_form_user_phone}');
            });
            </script>
        ";
    }    
}
add_shortcode( 'fill_form_with_userdata', 'elementor_form_fill_form_with_userdata');
/************************************ END 表單取得使用者資訊 *********************************************/