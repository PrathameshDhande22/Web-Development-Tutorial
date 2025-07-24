import { useParams } from "react-router-dom";
import type { ReactElement } from "react";
import {
  FormComponent,
  UseActionStateHook,
  UseFormStatus,
  UseHook,
  UseOptimisticHook,
  UseTransitionHook,
  ServerFnClientFn,
  RefForwarding,
} from "../Components";
import { Feature } from "../types";

export const Updates = () => {
  const { "*": update } = useParams();

  const getComponentAccordingtoUpdates = (update: string): ReactElement => {
    switch (update) {
      case Feature.USETRANSITION:
        return <UseTransitionHook />;
      case Feature.FORM:
        return <FormComponent />;
      case Feature.USEACTIONSTATE:
        return <UseActionStateHook />;
      case Feature.USEFORMSTATUS:
        return <UseFormStatus />;
      case Feature.USEOPTIMISTIC:
        return <UseOptimisticHook />;
      case Feature.USEHOOK:
        return <UseHook />;
      case Feature.SERVERFNCLIENTFN:
        return <ServerFnClientFn />;
      case Feature.REF:
        return <RefForwarding />;
      default:
        return <></>;
    }
  };

  return (
    <div className="border-1 border-gray-400">
      <h2 className="text-center text-xl fw-bold">{update}</h2>
      {getComponentAccordingtoUpdates(String(update))}
    </div>
  );
};
