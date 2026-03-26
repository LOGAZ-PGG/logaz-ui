import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DataPaginationProps {
  /** Current active page (1-based) */
  currentPage: number
  /** Total number of pages */
  totalPages: number
  /** Total number of items across all pages */
  totalItems: number
  /** Number of items displayed per page */
  itemsPerPage: number
  /** Callback when the page changes */
  onPageChange: (page: number) => void
  /** Callback when items-per-page value changes */
  onItemsPerPageChange?: (itemsPerPage: number) => void
  /** Whether to show the items-per-page selector (default: true) */
  showItemsPerPage?: boolean
  /** Predefined options for the items-per-page selector */
  itemsPerPageOptions?: number[]
  /** Additional CSS class names */
  className?: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const DEFAULT_ITEMS_PER_PAGE_OPTIONS = [10, 20, 25, 50, 100]

/**
 * Build the list of page numbers to render, inserting `null` for ellipsis
 * gaps so the total button count stays manageable.
 */
function getPageNumbers(
  currentPage: number,
  totalPages: number,
): (number | null)[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const pages: (number | null)[] = [1]

  if (currentPage > 3) {
    pages.push(null) // left ellipsis
  }

  const start = Math.max(2, currentPage - 1)
  const end = Math.min(totalPages - 1, currentPage + 1)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (currentPage < totalPages - 2) {
    pages.push(null) // right ellipsis
  }

  pages.push(totalPages)

  return pages
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const DataPagination = React.forwardRef<HTMLDivElement, DataPaginationProps>(
  (
    {
      currentPage,
      totalPages,
      totalItems,
      itemsPerPage,
      onPageChange,
      onItemsPerPageChange,
      showItemsPerPage = true,
      itemsPerPageOptions = DEFAULT_ITEMS_PER_PAGE_OPTIONS,
      className,
    },
    ref,
  ) => {
    const isFirstPage = currentPage <= 1
    const isLastPage = currentPage >= totalPages

    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalItems)

    const pageNumbers = React.useMemo(
      () => getPageNumbers(currentPage, totalPages),
      [currentPage, totalPages],
    )

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-between gap-4 px-4 py-3 sm:flex-row",
          className,
        )}
      >
        {/* Left section: info + items-per-page */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>
            {totalItems > 0
              ? `${startItem}\u2013${endItem} из ${totalItems}`
              : "Нет записей"}
          </span>

          {showItemsPerPage && onItemsPerPageChange && (
            <div className="flex items-center gap-2">
              <span className="whitespace-nowrap">Строк:</span>
              <Select
                value={String(itemsPerPage)}
                onValueChange={(value) => onItemsPerPageChange(Number(value))}
              >
                <SelectTrigger className="h-8 w-[72px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {itemsPerPageOptions.map((option) => (
                    <SelectItem key={option} value={String(option)}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Right section: page navigation */}
        {totalPages > 1 && (
          <nav
            role="navigation"
            aria-label="pagination"
            className="flex items-center gap-1"
          >
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={isFirstPage}
              onClick={() => onPageChange(currentPage - 1)}
              aria-label="Предыдущая страница"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {pageNumbers.map((page, index) =>
              page === null ? (
                <span
                  key={`ellipsis-${index}`}
                  className="flex h-8 w-8 items-center justify-center text-sm text-muted-foreground"
                  aria-hidden
                >
                  &hellip;
                </span>
              ) : (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  size="icon"
                  className="h-8 w-8 text-xs"
                  onClick={() => onPageChange(page)}
                  aria-current={page === currentPage ? "page" : undefined}
                  aria-label={`Страница ${page}`}
                >
                  {page}
                </Button>
              ),
            )}

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={isLastPage}
              onClick={() => onPageChange(currentPage + 1)}
              aria-label="Следующая страница"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </nav>
        )}
      </div>
    )
  },
)
DataPagination.displayName = "DataPagination"

export { DataPagination }
