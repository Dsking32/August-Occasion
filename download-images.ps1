# August Occasion website image downloader
# Run from PowerShell: .\download-images.ps1
# Downloads selected Unsplash images into public\images.

$ErrorActionPreference = 'Stop'
$Target = Join-Path (Get-Location) 'public\images'
New-Item -ItemType Directory -Force -Path $Target | Out-Null

$Images = @(
    @{ Name = 'hero-cocktail-bar.jpg'; Url = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85' },
    @{ Name = 'experience-bartender.jpg'; Url = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'experience-bar-setup.jpg'; Url = 'https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'occasion-wedding.jpg'; Url = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'occasion-corporate.jpg'; Url = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'occasion-private-party.jpg'; Url = 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'occasion-product-launch.jpg'; Url = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'occasion-dinner.jpg'; Url = 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'signature-cocktails.jpg'; Url = 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'drink-purple-cocktail.jpg'; Url = 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'drink-citrus-mocktail.jpg'; Url = 'https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'gallery-event-bar.jpg'; Url = 'https://images.unsplash.com/photo-1507504031003-b417219a0b5a?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'gallery-celebration.jpg'; Url = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'gallery-cocktail.jpg'; Url = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'gallery-toast.jpg'; Url = 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'gallery-bartender.jpg'; Url = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'cta-floral-detail.jpg'; Url = 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=85' },
    @{ Name = 'testimonial-event.jpg'; Url = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85' },
    @{ Name = 'footer-background.jpg'; Url = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=85' }
)

foreach ($Image in $Images) {
    $Path = Join-Path $Target $Image.Name
    try {
        Write-Host "Downloading $($Image.Name)..."
        Invoke-WebRequest -Uri $Image.Url -OutFile $Path
        Write-Host "Saved: $Path" -ForegroundColor Green
    }
    catch {
        Write-Warning "Failed to download $($Image.Name): $($_.Exception.Message)"
    }
}

Write-Host "`nFinished. Review the downloaded files in: $Target" -ForegroundColor Cyan
Write-Host 'Note: Some filenames intentionally reuse image sources; preview and replace any image that does not suit its section.'
