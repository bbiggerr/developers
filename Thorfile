class Default < Thor
  option :confirm, :type => :boolean
  desc 'rss [files]', 'Add the specified articles to the RSS feed'
  def rss(*files)
    @library_url = 'https://library.linode.com/'.freeze
    rss_file = 'source/rss.xml'.freeze
    max_entries = 20

    # if no files are specified, just read the current RSS feed
    if files.empty?
      items = existing_rss rss_file
      say 'Current RSS file contents', :yellow
      puts_rss items
      exit
    end

    # Get data from new articles
    begin
      new_items = new_rss files
    rescue NoMethodError => e
      say "[ERROR] Something's wrong with the metadata of one your articles. Aborting", :red
      exit
    end

    # load in existing rss feed if it exists
    begin
      new_items.concat existing_rss(rss_file)
    rescue => e
      say "[ERROR] Something's wrong with the current RSS file. Try to fix it manually?", :red
      exit
    end

    # make sure we have no more than max_entries
    new_items = new_items.first max_entries

    # write or preview
    if options[:confirm]
      write_rss! new_items, rss_file
    else
      rss_dry_run new_items
    end
  end

  private
  def new_rss(files)
    require 'yaml'

    new_items = []
    files.each do |file|
      meta = YAML.load File.read(file)
      article_path = file.match(/^source(.*)\.md$/)[1]
      link = File.join(@library_url, article_path)

      new_items << {
        :title => meta["title"],
        :link => link,
        :pubDate => meta["modified"],
        :author => "#{meta['author']['email']} (#{meta['author']['name']})",
        :description => meta["description"],
        :guid => link
      }
    end

    new_items
  end

  def existing_rss(rss_file)
    require 'rss'

    new_items = []
    if File.exists? rss_file
      RSS::Parser.parse(rss_file).items.each do |item|
        new_items << {
          :title => item.title,
          :link => item.link,
          :pubDate => item.pubDate,
          :description => item.description,
          :author => item.author,
          :guid => item.guid.content
        }
      end
    end

    new_items
  end

  def puts_rss(items)
    items.each do |item|
      puts '  ' << item[:title]
    end
  end

  def rss_dry_run(new_items)
    say 'New RSS will be:', :yellow
    puts_rss new_items
    say 'To write the file, rerun this command with --confirm', :yellow
  end

  def write_rss!(new_items, rss_file)
    require 'builder'

    xml = Builder::XmlMarkup.new( :indent => 2 )
    new_feed = xml.instruct!

    xml.rss :version => '2.0', 'xmlns:atom' => 'http://www.w3.org/2005/Atom' do
      xml.channel do
        xml.title 'The Linode Library'
        xml.link @library_url
        xml.description 'Linux VPS guides and technical documentation from the Linode Library'
        xml.category 'Computers', :domain => 'http://www.dmoz.org'
        xml.language 'en-us'
        xml.lastBuildDate Time.now.rfc2822
        xml.tag! 'atom:link', :rel => 'self', :type => 'application/rss+xml', :href => File.join(@library_url, rss_file)
        xml.docs 'http://www.rssboard.org/rss-specification'
        xml.copyright "Copyright © 2009-#{Date.today.year} Linode, LLC. All rights reserved."

        xml.image do
          xml.url File.join @library_url, 'images/rss/logo.png'
          xml.title 'The Linode Library'
          xml.link @library_url
        end

        new_items.each do |item|
          xml.item do
            xml.title item[:title]
            xml.link item[:link]
            xml.guid item[:guid], :isPermaLink => true
            xml.pubDate Time.parse(item[:pubDate].to_s).rfc2822
            xml.description item[:description]
            xml.author item[:author]
          end
        end
      end
    end

    # write
    File.open(rss_file, 'w') { |f| f.write new_feed }
  end
end