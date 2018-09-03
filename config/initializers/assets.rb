# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

if Rails.env.development?
  Rails.application.config.content_security_policy do |p|
    p.connect_src :self, :https, "http://localhost:3035", "ws://localhost:3035"
    # p.default_src :self, :https
    # p.font_src    :self, :https, :data
    # p.img_src     :self, :https, :data
    # p.object_src  :none
    # p.script_src  :self, :https, :unsafe_eval
    # p.style_src   :self, :https, :unsafe_inline
    # p.connect_src :self, :https, 'http://localhost:3035', 'ws://localhost:3035'

    # Specify URI for violation reports
    # p.report_uri "/csp-violation-report-endpoint"
  end

end
