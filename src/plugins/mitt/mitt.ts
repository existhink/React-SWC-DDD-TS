import mitt, { Emitter } from "mitt";

const eventBus: Emitter<IBusEvent> = mitt<IBusEvent>();

export default eventBus;
