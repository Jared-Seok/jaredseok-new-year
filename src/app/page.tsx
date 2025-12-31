import { Noto_Sans_KR, Nanum_Myeongjo } from "next/font/google";

const notoLines = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <main
      className={`min-h-screen px-6 py-20 md:py-32 max-w-2xl mx-auto ${notoLines.className} antialiased text-[#111111]`}
    >
      {/* Header - 우측 정렬 및 타이틀 줄바꿈 적용 */}
      <header className="mb-10 space-y-6 text-right">
        <p className="text-xl md:text-2xl tracking-[0.3em] uppercase text-gray-500 font-medium">
          2026 신년 인사
        </p>
        <h1 className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-black">
          2026년, <br />
          병오년의 첫 시간입니다.
        </h1>
      </header>

      {/* Main Content */}
      <article className="space-y-8 text-[1.05rem] md:text-[1.1rem] leading-[2.1] font-normal text-justify">
        <p>
          아, 물론 이 글을 쓰는 지금은 여전히 2025년의 끝자락입니다. 문득 지난
          1년이 궁금해져 올해 다이어리의 첫 페이지를 펼쳐보았습니다.
        </p>

        <p className="pl-6 border-l-2 border-black/10 text-gray-600 italic">
          ‘원래 3시에 일어났어야 하는데 알람이 울리지 않았다.’
        </p>

        <p>네, 저의 2025년은 첫 계획부터 보기 좋게 어긋나며 시작되었더군요.</p>

        <p>
          빽빽하게 적힌 악필을 한 장씩 해독하다 보니 묘한 기분이 듭니다. 타인의
          일기장을 몰래 훔쳐보는 듯한 낯섦과 반가움이 교차합니다.
        </p>

        <p>
          돌아보면 참으로 감사하고 행복한 한 해였습니다. 흥미로운 점은 그 모든
          순간이 대부분 제 계획 속에 없었다는 사실입니다. 만약 누군가 제 지난
          1년을 소설로 썼다면, 작가는 어설픈 개연성과 조악한 핍진성으로 독자들의
          비난을 샀을지도 모르겠습니다.
        </p>

        <p>
          언젠가 존경하는 작가님께 &quot;집필하시다 제목이나 첫 문장을 바꾼 적이
          있으시냐&quot;고 여쭤본 적이 있습니다. 그때 작가님은 &quot;제목은
          수없이 고치지만, 첫 문장은 단 한 번도 바꾼 적이 없는 것 같다&quot;고
          답하셨지요.
        </p>

        <p>
          매년 그랬던 것 같습니다. 단 한 번도 첫 문장대로 제목이 지어진 적이
          없고, 계획한 대로 마지막 문장까지 이어지지 않았습니다. 그럼에도
          불구하고 참 마음에 드는 글입니다.
        </p>

        <p>
          올해는 저의 부족한 역량과 나태한 하루들로 엉터리가 되었어야 할
          글이었습니다.
        </p>

        <p>
          그러나 낱말 하나와 쉼표 하나까지도 소중한 분들이 선물해주신 배려와
          다정함 덕분에, 분에 넘치는 근사한 이야기로 완성됐음을 절감합니다.
        </p>

        <p>
          그래서 저는 감히, 이 글을 읽어주시는 소중한 분들께 2026년이{" "}
          <span className="font-bold">‘계획대로 흘러가지 않는 한 해’</span>가
          되시길 희망해 봅니다.
        </p>

        {/* 핵심 메시지 강조 (배경색 및 심볼 활용) */}
        <div className="bg-black/[0.02] px-6 py-8 md:px-10 md:py-12 rounded-3xl space-y-8">
          <div className="space-y-4">
            <p className="relative pl-5">
              <span className="absolute left-0 text-gray-400">·</span>
              새해의 설렘 뒤에 찾아올 막연한 불안, 성취에 웃는 날과 실패에
              한숨짓는 날.
            </p>
            <p className="pl-5">
              그 모든 것들이 예단할 수 없는 ‘삶의 구체성’으로 뭉쳐 우리가 힘주어
              썼던 첫 문장을 무시한 채, 더 아름다운 문장들로 조각되길
              소망합니다.
            </p>
          </div>

          <p className="relative pl-5">
            <span className="absolute left-0 text-gray-400">·</span>
            다시 1년이 지나 끝에 닿았을 때, 2026년의 첫 문장을 추억하며 근사한
            제목 선물하실 수 있는 한 해 되시길 바랍니다.
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer
        className={`mt-8 pt-8 border-t border-black/5 text-right flex flex-col items-end space-y-8 ${nanumMyeongjo.className}`}
      >
        <p className="text-lg md:text-xl font-medium text-black leading-relaxed">
          감사합니다. <br className="md:hidden" />
          새해 복 많이 받으십시오.
        </p>

        <div className="space-y-2">
          <p className="text-base md:text-lg font-bold text-black tracking-tight">
            2026년 1월 1일
          </p>
          {/* 성명을 가장 두껍고 크게 강조 */}
          <p className="text-xl md:text-2xl font-bold text-black">
            석지원 배상
          </p>
        </div>
      </footer>
    </main>
  );
}
