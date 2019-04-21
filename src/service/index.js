import { GET } from "./method";
import { AVATAR } from "./APIs";

const getAvatar = (first, last) => GET(`${AVATAR}/?name=${first}+${last}`);

export { getAvatar };
