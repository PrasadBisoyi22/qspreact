import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import Card from './Task/CardTAsktailwind/card';
import Formtask from './Task/formhandletask/Formtask';
import AxiosConcept from './Topics/axiosconcept/AxiosConcept';
import AxiosTask from './Topics/axiosconcept/task/AxiosTask';
import Conditional_Rendering from './Topics/conditional_rendering.jsx/Conditional_Rendering';
import Hoc from './Topics/HOC/Hoc';
import UseRefHook from './Topics/Hooks/userefhooks/UseRefHook';
import HooksTabletask from './Topics/Hooks/useStateHooks/HooksTabletask';
import HooksTask from './Topics/Hooks/useStateHooks/HooksTask';
import Usestatehooks from './Topics/Hooks/useStateHooks/Usestatehooks';
import UseStateHookTask from './Topics/Hooks/useStateHooks/UseStateHookTask';
import Jsx_Expression from "./Topics/jsx_expression/Jsx_Expression";
import Jsx_Rules from "./Topics/jsx_expression/Jsx_Rules";
import Jsx_Task from "./Topics/jsx_expression/Jsx_Task";
import ListAndKeys from './Topics/listandkeys/ListAndKeys';
import Props_Home from "./Topics/props/Props_Home";
import Props_Conditional from './Topics/props_conditional_rendering/Props_Conditional';
import PropsConditionaltask from './Topics/props_conditional_rendering/PropsConditionaltask';
import PropsDrilling from './Topics/propsdrilling/PropsDrilling';
import TailwindCss from './Topics/tailwindcss/tailwindcss';
import UncontrolledForm from './Topics/uncontrolledform/UncontrolledForm';
import UseEffectHook from './Topics/useeffecthook/UseEffectHook';
import UseEffectHookTask from './Topics/useeffecthook/UseEffectHookTask';
import UseContextApi from './Topics/ussecontext_api/UseContextApi';
import ControlledForm from './Topics/controlledForm/ControlledForm';
import ChoseChar from './Task/randomchar/ChoseChar';
import RandomQuestion from './Task/randomchar/RandomQuestion';
import ContolledForm2 from './Topics/controlledForm/ContolledForm2';
import RadioAndCheckbox from './Topics/controlledForm/RadioAndCheckbox';
import CheckBox from './Topics/controlledForm/CheckBox';
import MultipleCheckbox from './Topics/controlledForm/MultipleCheckbox';
import AllInputFields from './Topics/controlledForm/AllInputFields';


const App = () => {
  return(
    <div>
      {/* <Jsx_Expression/> */}
      {/* <Jsx_Rules/> */}
      {/* <Props_Home/> // card follower */}
      {/* <Jsx_Task/>  */}
      {/* <Conditional_Rendering/> */}
      {/* <Props_Conditional/> */}
      {/* <PropsConditionaltask/> // space x */}
      {/* <Usestatehooks/> */}
      {/* <HooksTask/> // card task */}
      {/* <UseStateHookTask/> // change the data using function */}
      {/* <HooksTabletask/> // data fetch in table format */}
      {/* <UseRefHook/> */}
      {/* <UseEffectHook/> */}
      {/* <UseEffectHookTask/> */}
      {/* <AxiosConcept/> */}
      {/* <AxiosTask/>  */}
      {/* <PropsDrilling/> */}
      {/* <Hoc/> */}
      {/* <UseContextApi/> */}
      {/* <TailwindCss/> */}
      {/* <Card/> */}
      {/* <ListAndKeys/> */}
      {/* <UncontrolledForm/> */}
      {/* <Formtask/> */}
      {/* <ControlledForm/> */}
      {/* <ChoseChar/> */}
      {/* <RandomQuestion/> */}
      {/* <ToastContainer /> */}
      {/* <ContolledForm2/> */}
      {/* <RadioAndCheckbox/> */}
      {/* <CheckBox/> */}
      {/* <MultipleCheckbox/> */}
      <AllInputFields/>
    </div>
  )
}
export default App;
