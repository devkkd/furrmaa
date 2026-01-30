"use client"
import { useRouter } from 'next/navigation';

const LessonSidebar = ({ lessons, activeLessonId, plan }) => {
  const router = useRouter();

  return (
    <div className="bg-white border rounded-2xl p-4">
      <h3 className="font-extrabold mb-4">Lessons</h3>

      {/* PROGRESS BAR */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span>Learning Progress</span>
          <span>0%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-green-400 rounded-full w-0"></div>
        </div>
      </div>

      {/* LESSON LIST */}
      <div className="space-y-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => router.push(`/training/${plan}/${lesson.id}`)}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border
              ${activeLessonId === lesson.id
                ? 'border-green-400 bg-green-50'
                : 'hover:bg-gray-50'
              }`}
          >
            <img
              src={lesson.image}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex-1 text-xs">
              <p className="font-bold">{lesson.title}</p>
              <p className="text-gray-400">
                {lesson.lessonNum} | {lesson.time}
              </p>
            </div>

            {/* PLAY ICON */}
            <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">
              ▶
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonSidebar;
