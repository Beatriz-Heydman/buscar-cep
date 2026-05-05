// Libs
import type { ChangeEventHandler, SubmitEventHandler } from "react";

export type ResearchGroupProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: SubmitEventHandler<HTMLFormElement>;
};
