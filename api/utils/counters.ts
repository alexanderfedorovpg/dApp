const defaultAmount = 164250;
const defaultMembers = 7512;

export function getAmount(_amount: number, members: number): number {
  // Из каждых трёх участников записываем только одного и с этого одного в сборах добавляем 25$
  return defaultAmount + 25 * calculateMembers(members);
}

export function getMembers(members: number): number {
  return defaultMembers + calculateMembers(members);
}

function calculateMembers(members: number): number {
  // Из каждых трёх участников записываем только одного
  return members % 3 === 0 ? members / 3 : Math.floor(members / 3);
}
