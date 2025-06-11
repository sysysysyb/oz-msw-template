const FrontendIntro = () => {
  return (
    <div className="mx-auto text-gray-800">
      <p className="mb-6">
        <strong>프론트엔드(Frontend)</strong>는 사용자가 웹사이트나 앱에서{" "}
        <strong>직접 보고, 클릭하고, 상호작용하는 화면</strong>을 만드는 개발
        영역입니다.
      </p>

      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">사용 기술</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code className="text-amber-600 bg-gray-100 px-1 rounded">
              HTML
            </code>
            : 웹 페이지의 구조 정의
          </li>
          <li>
            <code className="text-amber-600 bg-gray-100 px-1 rounded">CSS</code>
            : 색상, 폰트, 레이아웃 등 스타일 정의
          </li>
          <li>
            <code className="text-amber-600 bg-gray-100 px-1 rounded">
              JavaScript
            </code>
            : 동적인 기능 및 상호작용 구현
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          프레임워크 및 도구
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>React, Vue, Angular - SPA 개발</li>
          <li>Next.js, Nuxt.js - SSR 기반 웹앱</li>
          <li>Tailwind CSS, Sass - 스타일링 도구</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          프론트엔드 vs 백엔드
        </h2>
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left">구분</th>
              <th className="border px-3 py-2 text-left">프론트엔드</th>
              <th className="border px-3 py-2 text-left">백엔드</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">역할</td>
              <td className="border px-3 py-2">UI 구현 및 사용자 경험 제공</td>
              <td className="border px-3 py-2">서버, 데이터 처리, 로직 수행</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">언어</td>
              <td className="border px-3 py-2">HTML, CSS, JavaScript</td>
              <td className="border px-3 py-2">Java, Python, Node.js 등</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">사용자 접점</td>
              <td className="border px-3 py-2">있음 (브라우저)</td>
              <td className="border px-3 py-2">없음 (서버/DB)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl text-blue-600 mb-2">예시</h2>
        <p>예: 사용자가 쇼핑몰에서 상품을 클릭할 때</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>프론트엔드:</strong> 클릭 시 화면 전환, 상품 정보 표시
          </li>
          <li>
            <strong>백엔드:</strong> 해당 상품 정보를 데이터베이스에서 조회
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrontendIntro;
