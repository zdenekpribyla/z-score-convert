# Vzájemný převod vážených skórů - spuštění ve Wordpress
>kalkulátor převodů vybraných statistických veličin vycházejících ze Z-skóru 
## Lokální spuštění projektu
+ `git clone https://github.com/zdenekpribyla/z-score-convert.git`
+ `cd z-score-convert`
+ Otevři `index.html` ve vašem prohlížeči
## Spuštění aplikace v redakčním systému wordpress
+ zkopírujte html kód z index.html na požadovanou stránku ve wordpres (přes html editor)
+ zkopíruj app.js do aktivní šablony a v ní do složky "js" (themes - název šablony - js)
+ v souboru functions.php v části "Enqueue scripts and styles" vlož wp_enqueue_script( 'z-convert-calculator', get_template_directory_uri() . '/js/app-convert.js', array(), '20170927', true );
 
## Author
[Zdenek Pribyla](https://github.com/zdenekpribyla/) (developer)
