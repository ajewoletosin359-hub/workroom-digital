import { ArrowUpRight, Download, FileText } from "lucide-react";

/* A real document — opens in the browser, downloads on request.
   No fake preview pages, no fabricated screenshots of PDFs. */
export default function DocCard({ src, title, meta }: { src: string; title: string; meta: string }) {
  return (
    <div className="media-frame flex items-center gap-5 bg-[#0d1218] p-6 md:p-7">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-btn border border-white/15 bg-deep text-secondary">
        <FileText size={20} aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-semibold text-primary">{title}</p>
        <p className="mt-1 font-mono text-[11px] text-muted">{meta}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-arrow inline-flex items-center gap-1.5 rounded-btn bg-accent px-4 py-2.5 text-[13px] font-semibold text-deep transition-colors hover:bg-white"
        >
          View <ArrowUpRight size={14} aria-hidden />
        </a>
        <a
          href={src}
          download
          aria-label={`Download ${title}`}
          className="inline-flex items-center justify-center rounded-btn border border-white/15 px-3.5 text-primary transition-colors hover:border-white/35"
        >
          <Download size={15} aria-hidden />
        </a>
      </div>
    </div>
  );
}
