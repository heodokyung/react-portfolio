// LOTTE DATA
export function fetchLotteSkill() {
  return fetch(
    'https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json'
  ).then((response) => response.json());
}

export function fetchLotteWork() {
  return async () => {
    await fetch(
      'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json'
    ).then((response) => response.json());
  };
}

export function fetchLotteAbout() {
  return async () => {
    await fetch(
      'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json'
    ).then((response) => response.json());
  };
}
