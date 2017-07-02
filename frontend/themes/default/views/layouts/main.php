<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\bootstrap\Modal;
use frontend\assets\AppAsset;
use common\models\Settings;



/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="" />
    <meta name='yandex-verification' content="" />
	<?php $this->registerLinkTag([
   
    'rel' => 'shortcut icon',
    'type' => 'image/ico',
    'href' => '/favicon.ico',
]);?>

    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
  
    <?php $this->beginBody() ?>
     <div class="ajax-overlay ajax-overlay-fixed" style="width: auto; height: auto; ">
    <div id="ajax-loading"></div>
    </div>    
     
<?php echo $content;?>
 <a href="#" class="scrollup">Наверх</a>
  <?php        Modal::begin([
    'header' => '<h2></h2>',
         'id'=>'product-modal',
   // 'toggleButton' => ['label' => 'click me'],
]);?>

   <?php Modal::end();?>
    <?php $this->endBody() ?>
    <?php if (!YII_DEBUG): ?>
    <?php echo \frontend\widgets\analytics\Analytics::widget(['view'=>'google']);?>
     <?php echo \frontend\widgets\analytics\Analytics::widget(['view'=>'yandex']);?>
    <?php endif; ?>
    <script type="text/javascript">
        //<![CDATA[
        baseUrl ='<?=Yii::$app->request->baseUrl;?>';
        suffix = '<?=Yii::$app->urlManager->suffix;?>';
        //]]>
    </script>
</body>
</html>
<?php $this->endPage() ?>
