"use client"
import { useParams } from 'next/navigation';
import LessonSidebar from '@/components/LessonSidebar';
import VideoPlayer from '@/components/VideoPlayer';
import { trainingPrograms } from '@/data/trainingData';
import WhyChooseFurrmaa from '@/components/WhyChooseFurrmaa';
import Container from '@/components/Container';

const TrainingLessonPage = () => {
  const { plan, lessonID } = useParams();

  const currentPlan = trainingPrograms.find(p => p.program === plan);
  if (!currentPlan) return <div>Invalid training plan</div>;

  const currentLesson = currentPlan.sessions.find(
    l => l.id === Number(lessonID)
  );
  if (!currentLesson) return <div>Lesson not found</div>;

  return (
    <>
      <Container>
        {/* PAGE TITLE */}
        <h1 className="text-3xl font-extrabold pt-10">
          {currentPlan.title}
        </h1>

        <section className="flex gap-10 mt-6">
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <VideoPlayer lesson={currentLesson} />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-[380px] shrink-0">
            <LessonSidebar
              lessons={currentPlan.sessions}
              activeLessonId={Number(lessonID)}
              plan={plan}
            />
          </div>
        </section>
      </Container>

      <WhyChooseFurrmaa />
    </>
  );
};

export default TrainingLessonPage;
