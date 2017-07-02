<?php 
//use Yii;
use yii\helpers\Html;
use yii\helpers\Url;

use yii\widgets\ActiveForm;
use yii\widgets\Menu;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use common\models\Settings;
use frontend\widgets\cart\Cart;
/* @var $this View */ 

if (!$this->title){
    $this->title = Yii::$app->name;
}


$controller = Yii::$app->controller->id;
$action = Yii::$app->controller->action->id;
$headerClass = '';
$phonesClass = 'class="dark"';
if ($controller == 'site' && $action == 'index'){
    $headerClass = 'class="home"';
    $phonesClass = '';
    
}


  
//var_dump($this->theme);
?>
<?php $this->beginContent('@frontend/views/layouts/main.php'); ?>

<header>

</header>
<div class="content">
   <?php echo $content;?>
</div>
<footer>

</footer>
<?php $this->endContent(); ?>