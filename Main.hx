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
    override function render()
    {
        return jsx('

            <View>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
            </View>


        ');
    }
}