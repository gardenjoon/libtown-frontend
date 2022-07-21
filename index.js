import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Home } from "./src/components/pages/Home";

AppRegistry.registerComponent(appName, () => Home);
