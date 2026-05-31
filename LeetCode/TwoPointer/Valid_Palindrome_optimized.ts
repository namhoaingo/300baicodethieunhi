// Optimized version that avoids regex and string copying
// This should be faster than the original TypeScript implementation

function isPalindromeOptimized(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters from left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric characters from right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        
        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

// Helper function to check if character is alphanumeric
// Faster than regex for single character checks
function isAlphanumeric(char: string): boolean {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) ||  // 0-9
        (code >= 65 && code <= 90) ||  // A-Z
        (code >= 97 && code <= 122)     // a-z
    );
}

// Even more optimized version using direct character code comparison
function isPalindromeUltraOptimized(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric from left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric from right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        
        // Direct character code comparison (faster than toLowerCase)
        const leftCode = s[left].charCodeAt(0);
        const rightCode = s[right].charCodeAt(0);
        
        // Case-insensitive comparison using character codes
        if (leftCode !== rightCode && 
            Math.abs(leftCode - rightCode) !== 32) {  // Difference between 'a' and 'A' is 32
            // Additional check: ensure both are letters before case comparison
            const leftIsLetter = (leftCode >= 65 && leftCode <= 90) || (leftCode >= 97 && leftCode <= 122);
            const rightIsLetter = (rightCode >= 65 && rightCode <= 90) || (rightCode >= 97 && rightCode <= 122);
            
            if (leftIsLetter && rightIsLetter) {
                // Both are letters, check case-insensitive
                if (Math.abs(leftCode - rightCode) !== 32) {
                    return false;
                }
            } else {
                // Not both letters, must match exactly
                return false;
            }
        }
        
        left++;
        right--;
    }
    
    return true;
}

// Simplified version - most readable and still fast
function isPalindromeSimple(s: string): boolean {
    // Clean string in one pass
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Two-pointer comparison
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

export { 
    isPalindromeOptimized, 
    isPalindromeUltraOptimized, 
    isPalindromeSimple 
};

