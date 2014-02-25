<?php

/**
 * Controller por defecto si no se usa el routes
 * 
 */
class IndexController extends AppController{

    protected function before_filter(){
        if (Input::isAjax()) {
          View::select('response', NULL);
          View::response('json');
        }
    }

    public function index(){
    }

    public function save(){
        View::response('json');
        $cupones = Load::model('cupones')->find_first('document=' . Input::post('document'));
        if ($cupones){
            $cupones->update($_REQUEST);
        }else{
            $cupones = Load::model('cupones');
            $cupones->create($_REQUEST);
        }
        $this->data = array('success' => true);
    }

    public function verify(){
        $this->data = array('exists' => false);
        if(Input::hasGet('document')){
            $document = Input::get('document');
            if (Load::model('cupones')->find("document='{$document}'")){
                $this->data['exists'] = true;
            }
        }
    }
}