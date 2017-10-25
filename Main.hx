package;

import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.api.*;
import react.native.component.*;


class Main
{

    static inline function __init__() {
        //untyped __js__('module.exports["default"]={0}',App);
        untyped __js__('export default App');
    }

    public static function main()
    {
        //var projectName = 'AwesomeProject';
        //AppRegistry.registerComponent(projectName, function() return App);
        //untyped __js__('module.exports["default"]={0}',App);

    }
}


@:expose
@:native('App')
class App extends ReactComponent
{

  static inline function text(txt:String) return jsx('<Text>${txt}</Text>');
  static inline function view(content) return jsx('<View>${content}</View>');

    override function render()
    {
        return view([
          text('cippola1'),
          text('cippola2'),
          text('cippola3'),
          text('cippola4'),
          text('cippola5')
        ]);
    }
}