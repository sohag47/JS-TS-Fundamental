/**
 * Calculates the final price of an item.
 * @remarks
 * This calculation includes standard state tax rates.
 *
 * @param price - The base price of the item.
 * @returns {number} The final total price.
 *
 * @example
 * ```ts
 * const final = calculateTotal(100);
 * ```
 *
 * @document documents/external-markdown.md
 */

export function calculateTotal(price: number, taxRate = 0.5): number {
  return price * taxRate;
}

console.log("first", calculateTotal(10));

/**
 * Calculates the loyalty discount tier for a customer based on their yearly spending.
 *
 * @remarks
 * **Business Logic:**
 * - Standard members get 0% discount.
 * - Silver tier unlocks at $1,000 yearly spend (5% discount).
 * - Gold tier unlocks at $5,000 yearly spend (15% discount).
 *
 * @param yearlySpend - Total amount spent by the customer over the last 12 months.
 * @returns The discount percentage applied to future checkouts.
 */
export function calculateLoyaltyDiscount(yearlySpend: number): number {
  if (yearlySpend >= 5000) return 0.15;
  if (yearlySpend >= 1000) return 0.05;
  return 0;
}

/**
 * Handles the secure user authentication flow, including session generation
 * and token refreshing.
 *
 * @public
 */
export class AuthService {
  /**
   * Authenticates user credentials against the database.
   *
   * @remarks
   * If authentication succeeds, this triggers an audit log entry and
   * issues an HTTP-only secure cookie session.
   *
   * @throws {InvalidCredentialsError} Thrown if email/password combination fails.
   */
  public async login(email: string, pass: string): Promise<Session> {
    // Implementation...
  }
}
