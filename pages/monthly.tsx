import Link from 'next/link'

export default function Monthly() {
  return (
    <main>
      <div>
        <Link href="/">トップへ | </Link>
        <Link href="/todo">TODO | </Link>
        <Link href="/monthly">月間表示へ</Link>
      </div>

      <div>月別の結果をビジュアライズ</div>
    </main>
  )
}