let aboutme = {
  name: "Tantai Layluxsiri",
  nickName: "Tiger",
  about: (fullName, nickName) => {
    return `Hello, my name is ${fullName} (${nickName}), My main experiences are Android programming, some web development, and game programming. I also have professional work experiences from companies such as Agoda and LINE MAN Wongnai.`;
  },
  hardSkills: [
    "Kotlin",
    "Ktor",
    "Android Studio",
    "Jetpack Compose",
    "Git",
    "JavaScript/HTML/CSS",
    "Java",
  ],
  softSkills: [
    "Experience with Agile development",
    "Full-stack software development",
    "Fluent in Thai and English",
    "Work experiences in team environment",
  ],
};

export function getAboutMeData() {
  return aboutme;
}
