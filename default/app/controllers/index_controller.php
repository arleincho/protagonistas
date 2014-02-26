<?php

/**
 * Controller por defecto si no se usa el routes
 * 
 */
class IndexController extends AppController{

    public function index(){
    }

    public function register(){
    	View::template('encuesta');
    }

    public function save(){
        View::response('json');
        $cupones = Load::model('cuba');
        $cupones->create($_REQUEST);
        $this->data = array('success' => true);
    }
}